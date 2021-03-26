/* Holds data related to a user's goals */

const otherGoals = [
    {
        goal: "Goal one"
    },
    {
        goal: "Goal two"
    }
];

const daily = {
    goal: 45
};


export function GetDailyGoal() {
    return daily;
}

export function GetOtherGoals() {
    return otherGoals;
}

export function UpdateDaily(newDaily) {
    daily.goal = newDaily.goal;
}
    


