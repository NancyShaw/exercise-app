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

module.exports.Add = (share)=> {
    if (!share.handle) {
        throw { code: 422, msg: "share must have an Owner!" }
    }

    share.id = shares_list[shares_list.length-1].id + 1;
    shares_list.push(share);
    
    return { ...share };
}

module.exports.Delete = (share_id)=> {
    //const share = shares_list[share_id];
    location = shares_list.indexOf(shares_list.find(s=> s.id == share_id));
    removedItem = shares_list.splice(location, 1);
    return removedItem;
}