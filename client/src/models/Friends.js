/** Access to friends */

const friends = [
    {
        handle: "Alpha",
        src: "https://bulma.io/images/placeholders/128x128.png",
        alt: "Placeholder image"
    },
    {
        handle: "Beta",
        src: "https://bulma.io/images/placeholders/128x128.png",
        alt: "Placeholder image"
    },
    {
        handle: "Gamma",
        src: "https://bulma.io/images/placeholders/128x128.png",
        alt: "Placeholder image"
    },
    {
        handle: "Echo",
        src: "https://bulma.io/images/placeholders/128x128.png",
        alt: "Placeholder image"
    },
];

const newFreinds = [
    {
        handle: "Sigma Tau",
        src: "https://bulma.io/images/placeholders/128x128.png",
        alt: "Placeholder image"
    },
    {
        handle: "Sigma Phi",
        src: "https://bulma.io/images/placeholders/128x128.png",
        alt: "Placeholder image"
    },
];

export function GetFriends() {
    return friends;
}

export function FindNewFriends() {
    return newFreinds;
}