import React, {useState} from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import PropTypes from "prop-types";

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
    }

    return (
        <div className="Login">
            <h1>Please Log In</h1>
            <h2>Please provide the username from your invite.
            It can be for either you or your partner and case
                does not matter.</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        autoFocus
                        type="username"
                        value={username}
                        onChange={(e) => setUserName(e.target.value.toLowerCase())}
                        />
                </Form.Group>
                <Form.Group>
                    <Form.Label>What website theme would you like?</Form.Label>
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>Login</Button>
            </Form>
        </div>
    );
}

Login.propTypes = {
    setUser: PropTypes.func.isRequired
}


