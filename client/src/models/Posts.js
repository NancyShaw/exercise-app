
import { api } from "../connections/myFetch";


export function GetMyFeed() {
    return api(`shares/feed/`);
}

export function AddShare(share) {
    console.log(share);
    return api(`shares`, share);
}