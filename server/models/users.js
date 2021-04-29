
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const goals = require('./goals');
const activities = require('./activities');

const SALT_ROUNDS = process.env.SALT_ROUNDS;
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRATION_SECS = process.env.JWT_EXPIRATION_SECS;
const CHEERY_PASSWD = process.env.CHEERY_PASSWD;
const ANGUA_PASSWD = process.env.ANGUA_PASSWD;
const SALLY_PASSWD = process.env.SALLY_PASSWD;

const list = [
    {
        name: "Sally",
        email: "sally@uberwald.com",
        handle: "@ImBatty",
        pic: "https://bulma.io/images/placeholders/96x96.png",
        password: SALLY_PASSWD,
        isAdmin: false,
        following: [ {handle: "@ItsTheNose", isApproved: true} ],
        userId: 1,
    },
    {
        name: "Angua",
        email: "angua@uberwald.com",
        handle: "@ItsTheNose",
        pic: "https://bulma.io/images/placeholders/96x96.png",
        password: ANGUA_PASSWD,
        isAdmin: true,
        following: [ {handle: "@Forensics", isApproved: true}, {handle: "@ImBatty", isApproved: true} ],
        userId: 2,
    },
    {
        name: "Cheery",
        email: "cheery@uberwald.com",
        handle: "@Forensics",
        password: CHEERY_PASSWD,
        pic: "https://bulma.io/images/placeholders/96x96.png",
        isAdmin: false,
        following: [ {handle: "@ItsTheNose", isApproved: true}, {handle: "@ImBatty", isApproved: true} ],
        userId: 3,
    },
    {
        name: "Hercules",
        email: "hercules@greece.org",
        handle: "@Hero",
        password: CHEERY_PASSWD,
        pic: "https://bulma.io/images/placeholders/96x96.png",
        isAdmin: false,
        following: [ {handle: "@ItsTheNose", isApproved: true} ],
        userId: 4,
    },
    {
        name: "Ares",
        email: "ares@greece.org",
        handle: "@BattleTime",
        password: CHEERY_PASSWD,
        pic: "https://bulma.io/images/placeholders/96x96.png",
        isAdmin: false,
        following: [ {handle: "@Hero", isApproved: true}, {handle: "@ItsTheNose", isApproved: true} ],
        userId: 5,
    },
    {
        name: "Zues",
        email: "zues@greece.org",
        handle: "@InCharge",
        password: CHEERY_PASSWD,
        pic: "https://bulma.io/images/placeholders/96x96.png",
        isAdmin: false,
        following: [ {handle: "@Hero", isApproved: true}, {handle: "@BattleTime", isApproved: true}, {handle: "@Forensics", isApproved: true} ],
        userId: 6,
    },
];

module.exports.GetAll = ()=> list;

module.exports.GetById = (userId)=> ({ ...list.find( (x, i)=> x.userId == userId ), password: undefined });

module.exports.GetByHandle = (handle)=> ({ ...list.find( (x, i)=> x.handle == handle ), password: undefined });

module.exports.Register = async (user)=> {

    const hash = await bcrypt.hash(user.password, +SALT_ROUNDS);
     
    user.password = hash;

    if (!user.name) {
        throw { code: 422, msg: "Name is required!" }
    }

    // add ID
    user.userId = list[list.length-1].userId + 1;
    user.isAdmin = false; // isAdmin to false by default
    user.following = []; // make the world a better place by initializing this!

    list.push(user);

    // set up other initial site data to ensure happy user experience
    goals.CreateInitialGoal(user.userId);
    activities.CreateInitialActivity(user.userId);

    //this returns a copy of user without the password
    return { ...user, password: undefined };
    
}
//check that this is how I want to do this
module.exports.Login = async (email, password) => {
    const user = list.find(x=> x.email == email);
    if(!user) throw { code: 401, msg: "Wrong Username or Password" };

    if(! await bcrypt.compare(password, user.password) ) {
        throw { code: 401, msg: "Wrong Username or Password" };
    }

    const userData = { ...user, password: undefined };
    const token = jwt.sign(userData, JWT_SECRET, { expiresIn: JWT_EXPIRATION_SECS});

    console.log(userData);
    return {userData, token};  
}

//for now only allowing users to update their pic, 
//but writing this in a way that allows for easy future improvements
module.exports.Update = (userId, user)=> {
    oldUser = list.find(u=> u.userId == userId);
    if (user.pic) {
        oldUser.pic = user.pic;
        console.log(`Updating pic for user ${userId}`);
    }
    return { ...oldUser, password: undefined };  
}
