/* Holds data related to a user's goals */

const currentGoals = [
    {
        daily: 45,
        other: [{
            goal: "Get fresh air"
            },
            {
            goal: "Be present in each moment"   
            }
        ]
    }
];

export function GetCurrentGoals() {
    return currentGoals;
}

export function GetDailyGoal() {
    return currentGoals.daily;
}

export function GetOtherGoals() {
    return currentGoals.other;
}
    


