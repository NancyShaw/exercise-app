/** Access to friends */

import { api } from "../connections/myFetch";
import Session from "./Session";

/*const friends = [
    {
        friend: {
            name: "Ally Alpha",
            handle: "Alpha",
            src: "https://bulma.io/images/placeholders/128x128.png",
            alt: "Placeholder image"
        }
    },
    {
        friend: {
            name: "Betty Beta",
            handle: "Beta",
            src: "https://bulma.io/images/placeholders/128x128.png",
            alt: "Placeholder image"
        }
    },
    {
        friend: {
            name: "Gary Gamma",
            handle: "Gamma",
            src: "https://bulma.io/images/placeholders/128x128.png",
            alt: "Placeholder image"
        }
    },
    {
        friend: {
            name: "Edward Echo",
            handle: "Echo",
            src: "https://bulma.io/images/placeholders/128x128.png",
            alt: "Placeholder image"
        }
    },
];*/

const newFreinds = [
    {
        friend: {
            name: "Sally Sigma-Tau",
            handle: "SigmaTau",
            src: "https://bulma.io/images/placeholders/128x128.png",
            alt: "Placeholder image"
        }
    },
    {
        friend: {
            name: "Sandy Sigma-Phi",
            handle: "SigmaPhi",
            src: "https://bulma.io/images/placeholders/128x128.png",
            alt: "Placeholder image"
        }
    },
];

export function GetFriends() {
    return api(`friends/${Session.user.userId}`);
}

export function FindNewFriends() {
    return newFreinds;
}