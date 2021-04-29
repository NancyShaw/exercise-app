/** model to hold exercise/activity information */

import { api } from "../connections/myFetch";
import Session from "./Session";

export function GetActivities() {
    return api(`activities/${Session.user.userId}`);
}

export function AddActivities(record) {
    return api(`activities/${Session.user.userId}`, record);
    //TODO: figure out why this is no longer reactive
}