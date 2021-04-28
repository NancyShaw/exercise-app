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

module.exports.GetFriends = (userId)=> {
    console.log(`retrieving friends for user ${userId}`);
    //first retrieve the friends for userId
    let following = users.GetById(userId)?.following;
    if (following == null) {
        console.log(`user ${userId} has no friends!`);
        // it would be nice to return a placeholder "friend" here
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

    //if usersList.length-1 = friends.length, 
    //user is already friends with everyone, return
    if (following.length == allUsers.length-1) {
        console.log(`User ${userId} is already friends with all other users`);
        return {};
    }

    //select user from all users (local list, not the class!). if not friend, return as suggestion
    let startId = getRandomInt(allUsers.length);
    console.log(`start id is ${startId}`);
    
    for (alluser in allUsers) {
        friendSug = allUsers.find(u => u.userId == startId);
        
        if (!following.some(f=> f.handle == friendSug.handle) && friendSug.userId != userId) {
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
   // const followingItem = { handle, isApproved:true };
    following.push(handle);
    
    console.log(following);
    console.log(`added ${handle} to friends list of user ${userId}`)
    let fullFollowing = users.GetByHandle(handle.handle);
    console.log(fullFollowing);
    const filtered = {user: {name:fullFollowing.name, handle:fullFollowing.handle, pic:fullFollowing.pic }};
    
    return filtered;
}