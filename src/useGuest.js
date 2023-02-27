import { useState } from "react";

export default function useGuest() {
    const getUser = () => {
        const tokenString = localStorage.getItem('username');
        return tokenString;
    };

    const [username, setUsername] = useState(getUser());

    const saveUser = (userToken) => {
        localStorage.setItem('username', userToken[0].username[0]);
        localStorage.setItem('p1FirstName', userToken[0].p1FirstName);
        localStorage.setItem('p2FirstName', userToken[0].p2FirstName);
        localStorage.setItem('children', userToken[0].children);
        localStorage.setItem('rsvped', userToken[0].rsvped);
        localStorage.setItem('stylePref', userToken[0].stylePref)
        localStorage.setItem('userID', userToken[0]._id)
        setUsername(userToken[0].username[0])
    };

    return {
        setUsername: saveUser,
        username
    }
}