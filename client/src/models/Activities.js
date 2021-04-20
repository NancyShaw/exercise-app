/** model to hold exercise/activity information */

import { api } from "../connections/myFetch";
import Session from "./Session";

const activities = [
    {
        activity: "running",
        timeMins: 30
    },
    {
        activity: "climbing",
        timeMins: 120
    },
    {
        activity: "dance",
        timeMins: 45
    },
];

export function GetActivities() {
    console.log(Session.user);
    return api(`activities/${Session.user.userId}`);
}

export function GetTotalTime() {
    var total = 0;
    activities.forEach(a => total+= a.timeMins);
    
    return total;
}

export function AddActivities(record) {
    //api('activities/${Session.user.id}', record);
    //this needs to also get a response, so i can update the UI
    activities.unshift(record);
}