import { Button } from "@material-ui/core"
import React from 'react';
import { auth, provider } from "../Firebase"
import "./index.css"

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .catch(error => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/IMessage_logo_%28Apple_Inc.%29.png/220px-IMessage_logo_%28Apple_Inc.%29.png"/>
                <h1>iMessage</h1>
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    );
}

export default Login;