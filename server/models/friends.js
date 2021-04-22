const users = require("./users");

// friends are stored in the "following" field on a user
// annoying to access the object there, but that's what we're doing

const filterUserInfo = ((userItems)=> {
    return userItems.map(u=> ({user:{ name:u.name, handle:u.handle, pic:u.pic}}));
})

module.exports.GetFriends = (userId)=> {

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