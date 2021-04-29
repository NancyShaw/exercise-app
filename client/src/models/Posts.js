
import { api } from "../connections/myFetch";
import Session from "./Session";

export function GetMyFeed() {
    return api(`shares/feed/`);
}

export function AddShare(share) {
    console.log(share);
    return api(`shares`, share);
}

export function DeleteShare(share_id) {
    return api(`shares/${share_id}`, {handle: Session.user.handle}, "DELETE");
}