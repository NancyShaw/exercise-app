const users = require("./users");

const goals = [
    {
        daily: 45,
        otherGoals: [
            {
                id: 1,
                goal: "Eat Veggies"
            },
            {
                id: 2,
                goal: "Stretch"
            }
        ],
        userId: 1
    },
    {
        daily: 40,
        otherGoals: [
            {
                id: 1,
                goal: "Do Yoga"
            },
            {
                id: 2,
                goal: "Dance more"
            }
        ],
        userId: 2
    },
    {
        daily: 60,
        otherGoals: [
            {
                id: 1,
                goal: "Stretch"
            },
            {
                id: 2,
                goal: "Run faster"
            }
        ],
        userId: 3
    },
    {
        daily: 60,
        otherGoals: [
            {
                id: 1,
                goal: "Stretch"
            },
            {
                id: 2,
                goal: "Run faster"
            }
        ],
        userId: 4
    },
    {
        daily: 60,
        otherGoals: [
            {
                id: 1,
                goal: "Stretch"
            },
            {
                id: 2,
                goal: "Run faster"
            }
        ],
        userId: 5
    },
    {
        daily: 60,
        otherGoals: [
            {
                id: 1,
                goal: "Stretch"
            },
            {
                id: 2,
                goal: "Run faster"
            }
        ],
        userId: 6
    },
];

module.exports.CreateInitialGoal = (userId)=> {
    const newGoal = { 
        daily: 20,
        otherGoals: [
            {
                id: 1,
                goal: "Create some goals!"
            }
        ],
        userId: userId
    };
    goals.push(newGoal);
}

module.exports.GetAll = ()=> goals;

module.exports.GetByUserId = (userId)=> {
    return goals.find(g=> g.userId == userId)
}

module.exports.UpdateDaily = (userId, newDaily)=> {
    this.GetByUserId(userId).daily = newDaily.goal;
    console.log(`updating daily goal to ${newDaily.goal} for user ${userId}`);
    return newDaily;
}

module.exports.Add = (userId, newGoal)=> {
    goalItem = goals.find(g=> g.userId == userId)
    newGoal.id = goalItem.otherGoals.length;
    goalItem.otherGoals.push(newGoal);
    console.log(`Added new goal ${newGoal.goal} for user ${userId}`);
    return newGoal;
}

//TODO: implement delete goal