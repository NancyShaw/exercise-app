/* Holds a user session.  Is a singleton */

import { api } from "../connections/myFetch";
import router from "../router";

const Session = {
    user: null
}
export default Session;

export async function Login(email, password) {
    console.log("I got to the login method");
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

/**
 * keeping code that I had handy... I totally don't need to do this, b/c drc ctrl...
 * export function Login(loginInfo) {
    //logging something from loginInfo for now, and seeing session
    //eventually this will call back to the server
    console.log(loginInfo.email);
    Session.user = { name: "John Doe", email: "johndoe@mystery.com"}
}
 */