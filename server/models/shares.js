/** */

const users = require("./users");

const shares_list = [ 
    { 
        src: "https://bulma.io/images/placeholders/1280x960.png",
        alt: "Placeholder image",
        caption: "Going plain clothes",
        time: Date(),
        handle: "@ItsTheNose",
        isPublic: true,
        id: 1,
    },
    { 
        src: "https://bulma.io/images/placeholders/1280x960.png",
        alt: "Placeholder image",
        caption: "Testing samples with Igor",
        time: Date(),
        handle: "@Forensics",
        isPublic: true,
        id: 4, 
    },
    { 
        src: "https://bulma.io/images/placeholders/1280x960.png",
        alt: "Placeholder image",
        caption: "At a crime scene.",
        time: Date(),
        handle: "@Forensics",
        isPublic: true,
        id: 6,
    },
    { 
        src: "https://bulma.io/images/placeholders/1280x960.png",
        alt: "Placeholder image",
        caption: "Does anyone have a beetroot???",
        time: Date(),
        handle: "@ImBatty",
        isPublic: true,
        id: 7,
    }
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
    console.log(mappedShares);
    return mappedShares;
}

module.exports.Add = (share)=> {
    console.log(share);
    if (!share.handle) {
        throw { code: 422, msg: "share must have an Owner!" }
    }

    share.id = shares_list[shares_list.length-1].id + 1;
    share.time = Date();
    share.isPublic = true; //right now all posts are public by default
    shares_list.unshift(share);
    console.log(share);
    return { ...share };
}

//this is probably not the ideal way to do this, but because of the way everything
//else is structured it would require too much refactoring to do it otherwise now
module.exports.Delete = (id, handle)=> {
    console.log(`user ${handle.handle} is attenpting to delete share with id ${id}`);
    //check that current user has permission to delete this share
    share = shares_list.find(s=> s.id == id);
    console.log(share);
    if (share.handle != handle.handle) {
        throw { code: 403, msg: "How would you like it if I came and deleted your posts? Knock it off!"}
    }
    location = shares_list.indexOf(shares_list.find(s=> s.id == id));
    removedItem = shares_list.splice(location, 1);
    return removedItem;
}