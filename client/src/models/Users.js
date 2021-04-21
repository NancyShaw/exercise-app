/** Model to contain information about users */

import { api } from "../connections/myFetch";

export function AddUser(user) {
    api("users/register", user);
}