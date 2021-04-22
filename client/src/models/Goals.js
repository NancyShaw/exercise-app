/* Holds data related to a user's goals */

import { api } from "../connections/myFetch";
import Session from "./Session";


export function GetGoals() {
    return api(`goals/${Session.user.userId}`);
}

export function AddOtherGoal(goal) {
    return api(`goals/${Session.user.userId}`, goal);
}

export function UpdateDaily(newDaily) {
    console.log(`inside updateDaily! newDaily equals: ${newDaily}`);
    return api(`goals/${Session.user.userId}`, newDaily, "PATCH");
}
    


