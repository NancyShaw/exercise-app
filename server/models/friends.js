const users = require("./users");

// friends are stored in the "following" field on a user
// annoying to access the object there, but that's what we're doing

const filterUserInfo = ((userItems)=> {
    return userItems.map(u=> ({user:{ name:u.name, handle:u.handle, pic:u.pic}}));
})

// returns a random integer on the range (1, max) inclusive of both 1 and max
const getRandomInt = (max)=> {
    return Math.floor(Math.random()*max) + 1;
}

const checkIfUserIsAlreadyFriend = (following, handle)=> {
    return following?.some(f=> f.handle == handle);
}

module.exports.GetFriends = (userId)=> {
    console.log(`retrieving friends for user ${userId}`);
    //first retrieve the friends for userId
    let following = users.GetById(userId)?.following;
    if (following == null) {
        console.log(`user ${userId} has no friends!`);
        
        return [];
    } 
    // now look up the name, handle, and pic for each of these users
    let fullFollowing = following.map(f=> users.GetByHandle(f.handle));

    // filter list of users
    let filteredFollowing = filterUserInfo(fullFollowing);
    return filteredFollowing;
}

module.exports.FindFriends = (userId)=> {
    console.log(`Finding new friends for user ${userId}`);
    //get list of current friends
    let following = users.GetById(userId)?.following;

    //get list of all users
    let allUsers = users.GetAll();

    //if usersList.length-1 equals friends.length, 
    //user is already friends with everyone
    if (following?.length == allUsers.length-1) {
        console.log(`User ${userId} is already friends with all other users`);
        throw { code: 418, msg: "You are already friends with everyone on this app. It's time to turn off your devices and go out into the REAL WORLD!!!"};
    }

    //select user from all users (local list, not the class!). if not friend, return as suggestion
    let startId = getRandomInt(allUsers.length);
    console.log(`start id is ${startId}`);
    
    for (alluser in allUsers) {
        friendSug = allUsers.find(u => u.userId == startId);
        
        if (!checkIfUserIsAlreadyFriend(following, friendSug.handle) && friendSug.userId != userId) {
            //filter and return friend suggestion
            
            let filtered = {user: {name:friendSug.name, handle:friendSug.handle, pic:friendSug.pic }};
            console.log(`Suggesting the following as a new friend for user ${userId}`);
            console.log(filtered);
            return filtered;
        } else {
            if (startId < allUsers.length) {
                startId++;
            } else {
                startId = 1;
            }
        }

    }

    //if we get here something went wrong
    //in theory we should have found a friend to suggest, but we didn't
    //for now return an empty result.
    console.log(`Something went wrong trying to find a friend for user ${userId}`);
    return {};

}

module.exports.AddFriend = (userId, handle)=> {
    handle.isApproved = true;
    console.log(handle);
    following = users.GetById(userId)?.following;
    let fullFollowing = users.GetByHandle(handle.handle);

    if (checkIfUserIsAlreadyFriend(following, handle.handle)) {
        console.log(`${handle} is already friends with user ${userId}`);
        throw { code: 422, msg: "User is already a friend! Please request another friend suggestion!"}
    } else if (fullFollowing.userId == userId) {
        console.log(`${handle.handle} belongs to user ${userId}, User cannot be friends with themself!`);
        throw { code: 422, msg: "A user cannot add themself a friend! Please request another friend suggestion!"}
    }

    if (following === undefined) {
        users.GetById(userId).following = [ handle ];
    } else {
        following.push(handle);
    }
    
    console.log(`added ${handle.handle} to friends list of user ${userId}`)
    console.log(following);
    const filtered = {user: {name:fullFollowing.name, handle:fullFollowing.handle, pic:fullFollowing.pic }};
    
    return filtered;
}

module.exports.DeleteFriend = (userId, handle)=> {
    console.log(`User ${userId} is attempting to remove ${handle.handle} from from their friend's list`);
    //get details for userId
    following = users.GetById(userId)?.following;

    //locate handle in following list, and remove
    toDel = following.find(f => f.handle == handle.handle);
    
    following.splice(following.indexOf(toDel), 1);
    console.log(`${handle.handle} was removed from user ${userId}'s friend's list (and is no longer present):`);
    console.log(following);
    return handle;

}