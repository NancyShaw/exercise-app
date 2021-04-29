/* Holds a user session.  Is a singleton */

import { api } from "../connections/myFetch";
import router from "../router";

const Session = {
    user: null,
    token: null,
    nextRoute: null
}
export default Session;

export async function Login(email, password) {
    const {userData, token} = await api("users/login", {email, password});
    
    Session.token = token;
    Session.user = userData;
    
    //if the user was redirected to the login page because they tried
    // to go somewhere requiering auth, go there. else, route to Home
    router.push(Session.nextRoute ?? '/home');
}

export function Logout() {
    Session.user = null
}

export function IsAuthenticated() {
    //setting to true for now to bypass auth
    //return true;
    return Session.user ? true : false;
}

export function AddUser(user) {
    api("users/register", user);
}

export function UpdateUser(user) {
    return api(`users/${Session.user.userId}`, user, "PATCH");
}