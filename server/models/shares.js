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
    },
    { 
    src: "https://bulma.io/images/placeholders/1280x960.png",
    alt: "Placeholder image",
    caption: "Testing samples with Igor",
    time: Date(),
    handle: "@Forensics",
    isPublic: true, 
    },
    { 
    src: "https://bulma.io/images/placeholders/1280x960.png",
    alt: "Placeholder image",
    caption: "At a crime scene.",
    time: Date(),
    handle: "@Forensics",
    isPublic: true,
    },
    { 
        src: "https://bulma.io/images/placeholders/1280x960.png",
        alt: "Placeholder image",
        caption: "Does anyone have a beetroot???",
        time: Date(),
        handle: "@ImBatty",
        isPublic: true,
    }
];

const listWithOwner = ()=> shares_list.map((x, i) => ({
    ...x,
    user: users.GetByHandle(x.handle)
}) );

const filterOutUserInfo = ((shares)=> {
    return shares.forEach(s=> s.user=null);
})

module.exports.GetAll = ()=> {
    var filteredShares = listWithOwner();
    filterOutUserInfo(filteredShares);
    return filteredShares;
}

module.exports.GetWall = (handle)=> {
    var filteredShares = listWithOwner().filter(share=> share.handle == handle);
    filterOutUserInfo(filteredShares);
    return filteredShares;
    
}

module.exports.GetFeed = (handle)=> {
    var filteredShares = listWithOwner().filter(share=> users.GetByHandle(handle).following).some(f=> f.handle == share.handle && f.isApproved) ;
    filterOutUserInfo(filteredShares);
    return filteredShares;
}

module.exports.Get = (share_id)=> shares_list[share_id];

module.exports.Add = (share)=> {
    if (!share.handle) {
        throw { code: 422, msg: "share must have an Owner!" }
    }
    shares_list.push(share);
    
    return { ...share };
}

//TODO: decide if i actually want this
module.exports.Update = (share_id, share)=> {
    const oldObj = shares_list[share_id];
    const newObj = {...oldObj, ...share }
    shares_list[share_id] = newObj;
    return newObj;
}

module.exports.Delete = (share_id)=> {
    const share = shares_list[share_id];
    shares_list.splice(share_id, 1);
    return share;
}