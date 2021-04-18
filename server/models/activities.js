


//TODO: add a date field
const activities_list = [
    {
        user_id: 1,
        activities: [
            {
                type: "running",
                timeMins: 30
            },
            {
                type: "climbing",
                timeMins: 120
            },
            {
                type: "dance",
                timeMins: 45
            }
        ]
    },
    {
        user_id: 2,
        activities: [
            {
                type: "running",
                timeMins: 30
            },
            {
                type: "climbing",
                timeMins: 120
            },
            {
                type: "dance",
                timeMins: 45
            }
        ]
    }
];

module.exports.GetByUserId = (user_id)=> {
    //TODO: maybe calculate total time here, and return with activities list
    return activities_list.find(a=> a.user_id == user_id)
}

module.exports.Add = (user_id, record)=> {
    activityItem = activities_list.find(a=> a.user_id == user_id);
    activityItem.activities.push(record);
    //consider whether I want to return the entire list, or just the new record
    return activityItem;
}