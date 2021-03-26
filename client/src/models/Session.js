/* Holds a user session.  Is a singleton */


const Session = {
    user: null
}
export default Session;

export function Login(loginInfo) {
    //logging something from loginInfo for now, and seeing session
    //eventually this will call back to the server
    console.log(loginInfo.email);
    Session.user = { name: "John Doe", email: "johndoe@mystery.com"}
}

export function Logout() {
    Session.user = null
}

export function IsAuthenticated() {
    //setting to true for now to bypass auth
    return true;
    //return Session.user ? true : false;
}