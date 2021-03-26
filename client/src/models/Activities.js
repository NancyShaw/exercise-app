/** model to hold exercise/activity information */

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
    return activities;
}

export function GetTotalTime() {
    var total = 0;
    activities.forEach(a => total+= a.timeMins);
    
    return total;
}

export function AddActivities(record) {
    activities.unshift(record);
}