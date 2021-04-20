


//TODO: add a date field
const activities_list = [
    {
        user_id: 1,
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
        user_id: 2,
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
        user_id: 3,
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

module.exports.GetByUserId = (user_id)=> {
    //TODO: maybe calculate total time here, and return with activities list
    const userData = activities_list.find(a=> a.user_id == user_id);
    //null check
    return userData.activities;
}

module.exports.Add = (user_id, record)=> {
    activityItem = activities_list.find(a=> a.user_id == user_id);
    activityItem.activities.push(record);
    //consider whether I want to return the entire list, or just the new record
    return activityItem;
}