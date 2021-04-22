
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const goals = require('./goals');
const activities = require('./activities');

const SALT_ROUNDS = process.env.SALT_ROUNDS;
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRATION_SECS = process.env.JWT_EXPIRATION_SECS;

const list = [
    {
        name: "Sally",
        email: "sally@uberwald.com",
        handle: "@ImBatty",
        pic: "https://bulma.io/images/placeholders/96x96.png",
        password: "notsecure",
        isAdmin: false,
        following: [ {handle: "@ItsTheNose", isApproved: true} ],
        userId: 1,
    },
    {
        name: "Angua",
        email: "angua@uberwald.com",
        handle: "@ItsTheNose",
        pic: "https://bulma.io/images/placeholders/96x96.png",
        password: "notsecure",
        isAdmin: true,
        following: [ {handle: "@Forensics", isApproved: true}, {handle: "@ImBatty", isApproved: true} ],
        userId: 2,
    },
    {
        name: "Cheery",
        email: "cheery@uberwald.com",
        handle: "@Forensics",
        password: "notsecure",
        pic: "https://bulma.io/images/placeholders/96x96.png",
        isAdmin: false,
        following: [ {handle: "@ItsTheNose", isApproved: true}, {handle: "@ImBatty", isApproved: true} ],
        userId: 3,
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
