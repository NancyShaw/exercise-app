/** model to hold exercise/activity information */

const activities = [
    {
        activity: "running",
        timeMins: 30,
        date: 2021-3-14
    },
    {
        activity: "climbing",
        timeMins: 120,
        date: 2021-3-14
    },
    {
        activity: "dance",
        timeMins: 45,
        date: 2021-3-14
    },
];

export function GetActivities() {
    return activities;
}

export function GetTotalTime() {
    var total = 0;
    activities.forEach(a => total+= a.timeMins);
    
    return total;
}