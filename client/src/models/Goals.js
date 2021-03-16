/* Holds data related to a user's goals */

const otherGoals = [
    {
        goal: "Goal one"
    },
    {
        goal: "Goal two"
    }
];

let daily = 45;


export function GetDailyGoal() {
    return daily;
}

export function GetOtherGoals() {
    return otherGoals;
}

export function UpdateDaily(newDaily) {
    daily = newDaily;
}
    


