/* Holds data related to a user's goals */

import { api } from "../connections/myFetch";
import Session from "./Session";

/*const otherGoals = [
    {
        goal: "Goal one"
    },
    {
        goal: "Goal two"
    }
];

const daily = {
    goal: 45
};*/


/*export function GetDailyGoal() {
    return daily;
}

export function GetOtherGoals() {
    return otherGoals;
}*/

export function GetGoals() {
    return api(`goals/${Session.user.userId}`);
}

export function AddOtherGoal(goal) {
    return api(`goals/${Session.user.userId}`, goal);
}

export function UpdateDaily(newDaily) {
    console.log(`inside updateDaily! newDaily equals: ${newDaily}`);
    return api(`goals/${Session.user.userId}`, newDaily, "PATCH");
    //daily.goal = newDaily.goal;
}
    


