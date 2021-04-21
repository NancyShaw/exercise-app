/** Model to contain information about users */

import { api } from "../connections/myFetch";
import Session from "./Session";


export function GetUser() {
    return api(`users/${Session.user.userId}`);
}

export function AddUser(user) {
    api("users/register", user);
}

export function UpdateUser(user) {
    return api(`users/${Session.user.userId}`, user, "PATCH");
}