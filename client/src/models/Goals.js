/* Holds data related to a user's goals */

const otherGoals = [
    {
        goal: "Goal one"
    },
    {
        goal: "Goal two"
    }
];

const daily = 45;


export function GetDailyGoal() {
    return daily;
}

export function GetOtherGoals() {
    return otherGoals;
}

export function UpdateDaily(newDaily) {
    this.daily = newDaily;
}
    


