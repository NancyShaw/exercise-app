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
        user_id: 2
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
        user_id: 1
    },
];

module.exports.GetAll = ()=> goals;

module.exports.GetByUserId = (user_id)=> {
    return goals.find(g=> g.user_id == user_id)
}

module.exports.UpdateDaily = (user_id, newDaily)=> {
    this.GetByUserId(user_id).daily = newDaily;
    return newDaily;
}

module.exports.Add = (user_id, newGoal)=> {
    goalItem = goals.find(g=> g.user_id == user_id)
    newGoal.id = goalItem.otherGoals.length;
    goalItem.otherGoals.push(newGoal);
    return newGoal;
}