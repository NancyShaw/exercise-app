/** Model to contain information about users */

import { api } from "../connections/myFetch";
import Session from "./Session";


export function GetUser() {
    return api(`users/${Session.user.userId}`);
}