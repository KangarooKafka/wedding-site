import React, {useState} from "react";
import PropTypes from "prop-types";
import setJPTheme from "../Functions/setJPTheme";
import urlUtil from "../Common/utils/urlUtil";

// Uses the username to get the guest info from the API
async function getUserInfo(username) {
    return fetch(`${urlUtil}/api/guest/?username=${username}`, {
        method: 'GET'
    })
        .then(data => data.json())
}

// Displays a timed invalid message
function invalidMessage(setInvalid) {
    setInvalid(true)
    setTimeout(() => {
        setInvalid(false)
    }, 2000)

}

export default function Login({ setUser }) {
    // Hooks for username and if the username was valid
    const [username, setUserName] = useState("");
    const [invalid, setInvalid] = useState(false);

    // Handles submit action
    const handleSubmit = async(e) => {
        e.preventDefault();

        // Make API call to get guest with entered username
        const user = await getUserInfo(username);

        // If valid guest returned
        if (user[0]?.username) {
            // Use provided hook from App to set username
            setUser(user)

            // If guest set JP theme, change theme
            if (e.target.theme.value === 'jurassic-park') {
                setJPTheme();
            }
        }  else {
            // If valid guest not returned, show invalid message
            invalidMessage(setInvalid)
        }
    }

    return (
        <div className="login">
            <h1>Log In</h1>
            <h2>Your username is your first name + your last initial</h2>
            <p><span>For example, Robert Muldoon's username would be robertm</span></p>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Username:</p>
                        <input
                            type="username"
                            value={username}
                            onChange={(e) => setUserName(e.target.value.toLowerCase())}
                        />
                    </label>
                    {/* Display error message if username was wrong */}
                    { invalid &&
                    <p><span>Invalid username</span></p>
                    }
                </fieldset>
                <fieldset>
                    <label>
                        <p>What website theme would you like?</p>
                        <ul>
                        <li><input className={"radio"} type={"radio"} value={"traditional"} name={"theme"}/>Traditional</li>
                        <li><input className={"radio"} type={"radio"} value={"jurassic-park"} name={"theme"}/>Jurassic Park</li>
                        </ul>
                    </label>
                </fieldset>
                <button type="submit" disabled={!username.length > 0}>Login</button>
            </form>
            <p><span>(If you have trouble logging in, please let me know: 810-845-0806)</span></p>
        </div>
    );
}

Login.propTypes = {
    setUser: PropTypes.func.isRequired
}


