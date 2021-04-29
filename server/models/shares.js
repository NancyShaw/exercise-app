/** */

const users = require("./users");

const shares_list = [ 
    { 
        src: "https://bulma.io/images/placeholders/1280x960.png",
        alt: "Placeholder image",
        caption: "Spent a lovely afternoon throwing thunderbolts at passersby",
        time: Date(),
        handle: "@InCharge",
        isPublic: true,
        id: 1,
    },
    { 
        src: "https://bulma.io/images/placeholders/1280x960.png",
        alt: "Placeholder image",
        caption: "Sparring is excellent excercise!",
        time: Date(),
        handle: "@BattleTime",
        isPublic: true,
        id: 2, 
    },
    { 
        src: "https://bulma.io/images/placeholders/1280x960.png",
        alt: "Placeholder image",
        caption: "Spent a lovely afternoon at a dog park with Cerberus!",
        time: Date(),
        handle: "@MyDogIsCoolerThanYours",
        isPublic: true,
        id: 3,
    },
    { 
        src: "https://bulma.io/images/placeholders/1280x960.png",
        alt: "Placeholder image",
        caption: "I'm just here to meet even more men than I already have chasing after me...",
        time: Date(),
        handle: "@HotStuff",
        isPublic: true,
        id: 4,
    },
    { 
        src: "https://bulma.io/images/placeholders/1280x960.png",
        alt: "Placeholder image",
        caption: "I highly recommend running, it's great exercise, and you can bring your canine pal with you!",
        time: Date(),
        handle: "@MyDogIsCoolerThanYours",
        isPublic: true,
        id: 5,
    },
];

const listWithOwner = ()=> shares_list.map((x, i) => ({
    ...x,
    user: users.GetByHandle(x.handle)
}) );

const filterOutUserInfo = ((shares)=> {
    return shares.map(s=> ({...s, user:{ name:s.user.name}}));
})

module.exports.GetAll = ()=> {
    let filteredShares = listWithOwner();
    let mappedShares = filterOutUserInfo(filteredShares);
    return mappedShares;
}

module.exports.GetWall = (handle)=> {
    let filteredShares = listWithOwner().filter(share=> share.handle == handle);
    let mappedShares = filterOutUserInfo(filteredShares);
    return mappedShares;
    
}

module.exports.GetFeed = (handle)=> {
    let filteredShares = listWithOwner()?.filter(share=>
            share.handle == handle ||  
            users.GetByHandle(handle).following?.some(f=> f.handle == share.handle && f.isApproved) 
        );

    let mappedShares = filterOutUserInfo(filteredShares);
    //console.log(mappedShares);
    return mappedShares;
}

module.exports.Add = (share)=> {
    if (!share.handle) {
        throw { code: 422, msg: "share must have an Owner!" }
    }

    share.id = shares_list[shares_list.length-1].id + 1;
    share.time = Date();
    share.isPublic = true; //right now all posts are public by default
    shares_list.unshift(share);
    
    console.log(`Added share for ${share.handle}`);
    return { ...share };
}

//this is probably not the ideal way to do this, but because of the way everything
//else is structured it would require too much refactoring to do it otherwise now
module.exports.Delete = (id, handle)=> {
    console.log(`user ${handle.handle} is attenpting to delete share with id ${id}`);
    //check that current user has permission to delete this share
    share = shares_list.find(s=> s.id == id);
    
    if (share.handle != handle.handle) {
        throw { code: 403, msg: "How would you like it if I came and deleted your posts? Knock it off!"}
    }
    location = shares_list.indexOf(shares_list.find(s=> s.id == id));
    removedItem = shares_list.splice(location, 1);
    return removedItem;
}