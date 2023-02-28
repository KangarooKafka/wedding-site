import { useState } from "react";

export default function useGuest() {
    // Hook for user
    const [username, setUsername] = useState(localStorage.getItem('username'));

    // Function that saves specific guest attributes to local storage
    const saveGuest = (guest) => {
        localStorage.setItem('username', guest[0].username[0]);
        localStorage.setItem('p1FirstName', guest[0].p1FirstName);
        localStorage.setItem('p2FirstName', guest[0].p2FirstName);
        localStorage.setItem('children', guest[0].children);
        localStorage.setItem('rsvped', guest[0].rsvped);
        localStorage.setItem('stylePref', guest[0].stylePref)
        localStorage.setItem('userID', guest[0]._id)
        setUsername(guest[0].username[0])
    };

    return {
        setUsername: saveGuest,
        username
    }
}