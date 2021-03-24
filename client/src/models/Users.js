/** Model to contain information about users */

const users = [
    {
        nomedeplume: "Sally",
        email: "sally@uberwald.com",
        handle: "ImBatty",
        pic: "https://bulma.io/images/placeholders/96x96.png",
        password: "notsecure",
    },
    {
        nomedeplume: "Angua",
        email: "angua@uberwald.com",
        handle: "ItsTheNose",
        pic: "https://bulma.io/images/placeholders/96x96.png",
        password: "notsecure",
    }
]

export function GetUser(handle) {
    return users.filter( x=> x.handle == handle);
}

export function AddUser(record) {
    users.unshift(record);
}