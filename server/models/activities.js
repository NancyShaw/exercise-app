


//TODO: add a date field
const activities_list = [
    {
        userId: 1,
        activities: [
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
            }
        ]
    },
    {
        userId: 2,
        activities: [
            {
                activity: "running",
                timeMins: 30
            },
            {
                activity: "climbing",
                timeMins: 120
            },
            {
                type: "dance",
                timeMins: 45
            }
        ]
    },
    {
        userId: 3,
        activities: [
            {
                activity: "Axe Throwing",
                timeMins: 35
            },
            {
                activity: "Sparing",
                timeMins: 100
            },
            {
                activity: "Running",
                timeMins: 20
            }
        ]
    }
];

module.exports.CreateInitialActivity = (userId)=> {
    const newActivity = {
        userId: userId,
        activities: [
            {
                activity: "Registering for Exercise App!",
                timeMins: 3
            }
        ]
    };
    activities_list.push(newActivity);
}

module.exports.GetByUserId = (userId)=> {
    //TODO: maybe calculate total time here, and return with activities list
    const userData = activities_list.find(a=> a.userId == userId);
    //TODO: add null check
    return userData.activities;
}

module.exports.Add = (userId, record)=> {
    activityItem = activities_list.find(a=> a.userId == userId);
    activityItem.activities.push(record);
    console.log(activityItem);
    return { ...record };
}