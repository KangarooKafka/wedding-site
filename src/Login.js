import React, {useState} from "react";
import PropTypes from "prop-types";
import setJPTheme from "./setJPTheme";

async function getUserInfo(username) {
    return fetch(`http://localhost:4000/guest/?username=${username}`, {
        method: 'GET'
    })
        .then(data => data.json())
}

export default function Login({ setUser }) {
    const [username, setUserName] = useState("");

    const validateForm = () => {
        return username.length > 0;
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const user = await getUserInfo(username);
        setUser(user)
        const theme = e.target.theme.value
        if (theme === 'jurassic-park') {
            setJPTheme();
        }
    }

    return (
        <div className="login">
            <h1>Log In</h1>
            <h2>Please provide the username from your invite.</h2>
            <p>It can be for either you or your partner and is not case sensitive.</p>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Username</p>
                        <input
                            autoFocus
                            type="username"
                            value={username}
                            onChange={(e) => setUserName(e.target.value.toLowerCase())}
                        />
                    </label>
                </fieldset>
                <fieldset>
                    <label>
                        <p>What website theme would you like?</p>
                        <input type={"radio"} value={"traditional"} name={"theme"}/>Traditional
                        <input type={"radio"} value={"jurassic-park"} name={"theme"}/>Jurassic Park
                    </label>
                </fieldset>
                <button type="submit" disabled={!validateForm()}>Login</button>
            </form>
        </div>
    );
}

Login.propTypes = {
    setUser: PropTypes.func.isRequired
}


