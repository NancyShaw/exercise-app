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
    return api(`friends/${Session.user.userId}`, handle);
}

export function DeleteFriend(handle) {
    return api(`friends/${Session.user.userId}`, handle, "DELETE");
}