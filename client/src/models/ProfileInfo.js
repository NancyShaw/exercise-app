/** model for holding user data */

// holds profile info for a specific user
let profileInfo =
    { 
        nomedeplume: "Sally",
        email: "sally@uberwald.com",
        handle: "ImBatty",
        pic: "https://bulma.io/images/placeholders/96x96.png",
    };

export function GetProfileInfo() {
    return profileInfo;
}

export function UpdateInfo(info) {
    profileInfo.pic = info.pic;
    return profileInfo;
}