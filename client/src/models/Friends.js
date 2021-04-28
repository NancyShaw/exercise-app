/** Access to friends */

import { api } from "../connections/myFetch";
import Session from "./Session";

export function GetFriends() {
    return api(`friends/${Session.user.userId}`);
}

export function FindNewFriends() {
    return api(`friends/new/${Session.user.userId}`);
}

export function AddFriend(handle) {
    console.log(`about to send an AddFriend request back to the server for handle ${handle}`);
    console.log(handle);
    return api(`friends/${Session.user.userId}`, handle);
}

export function DeleteFriend(handle) {
    console.log(`about to send a DeleteFriend request back to the server for handle:`);
    console.log(handle);
    return api(`friends/${Session.user.userId}`, handle, "DELETE");
}