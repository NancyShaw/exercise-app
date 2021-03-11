/* Holds a user session.  Is a singleton */

const Session = {
    user: null
}
export default Session;

export function Login() {
    Session.user = { name: "John Doe"}
}

export function Logout() {
    Session.user = null
}

export function IsAuthenticated() {
    //setting to true for now to bypass auth
    return true;
    //return Session.user ? true : false;
}