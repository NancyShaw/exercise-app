
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const goals = require('./goals');
const activities = require('./activities');

const SALT_ROUNDS = process.env.SALT_ROUNDS;
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRATION_SECS = process.env.JWT_EXPIRATION_SECS;
const HERA_PASSWD = process.env.HERA_PASSWD;
const APHRODITE_PASSWD = process.env.APHRODITE_PASSWD;
const HADES_PASSWD = process.env.HADES_PASSWD;
const HERCULES_PASSWD = process.env.HERCULES_PASSWD;
const ARES_PASSWD = process.env.ARES_PASSWD;
const ZEUS_PASSWD = process.env.ZEUS_PASSWD;

const list = [
    {
        name: "Hera",
        email: "hera@greece.org",
        handle: "@Mom",
        pic: "https://bulma.io/images/placeholders/96x96.png",
        password: HERA_PASSWD,
        isAdmin: false,
        following: [ {handle: "@Hero", isApproved: true} ],
        userId: 1,
    },
    {
        name: "Aphrodite",
        email: "aphrodite@greece.org",
        handle: "@HotStuff",
        pic: "https://bulma.io/images/placeholders/96x96.png",
        password: APHRODITE_PASSWD,
        isAdmin: true,
        following: [ {handle: "@BattleTime", isApproved: true}, {handle: "@Hero", isApproved: true} ],
        userId: 2,
    },
    {
        name: "Hades",
        email: "hades@greece.org",
        handle: "@MyDogIsCoolerThanYours",
        password: HADES_PASSWD,
        pic: "https://bulma.io/images/placeholders/96x96.png",
        isAdmin: false,
        following: [ {handle: "@Hero", isApproved: true}, {handle: "@Mom", isApproved: true}, {handle: "@InCharge", isApproved: true} ],
        userId: 3,
    },
    {
        name: "Hercules",
        email: "hercules@greece.org",
        handle: "@Hero",
        password: HERCULES_PASSWD,
        pic: "https://bulma.io/images/placeholders/96x96.png",
        isAdmin: false,
        following: [ {handle: "@HotStuff", isApproved: true} ],
        userId: 4,
    },
    {
        name: "Ares",
        email: "ares@greece.org",
        handle: "@BattleTime",
        password: ARES_PASSWD,
        pic: "https://bulma.io/images/placeholders/96x96.png",
        isAdmin: false,
        following: [ {handle: "@Hero", isApproved: true}, {handle: "@MyDogIsCoolerThanYours", isApproved: true} ],
        userId: 5,
    },
    {
        name: "Zeus",
        email: "zeus@greece.org",
        handle: "@InCharge",
        password: ZEUS_PASSWD,
        pic: "https://bulma.io/images/placeholders/96x96.png",
        isAdmin: false,
        following: [ {handle: "@Hero", isApproved: true}, {handle: "@BattleTime", isApproved: true}, {handle: "@HotStuff", isApproved: true} ],
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

    console.log(`registered new user with userId ${user.userId}`);
    //this returns a copy of user without the password
    return { ...user, password: undefined };
    
}

module.exports.Login = async (email, password) => {
    const user = list.find(x=> x.email == email);
    if(!user) throw { code: 401, msg: "Wrong Username or Password" };

    if(! await bcrypt.compare(password, user.password) ) {
        throw { code: 401, msg: "Wrong Username or Password" };
    }

    const userData = { ...user, password: undefined };
    const token = jwt.sign(userData, JWT_SECRET, { expiresIn: JWT_EXPIRATION_SECS});

    console.log(`Logging in user ${userData.userId}`);
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
