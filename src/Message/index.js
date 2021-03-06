import React from 'react'
import { Avatar } from '@material-ui/core';
import "./index.css"

function Message({id, contents}) {
    return (
        <div className="message">
            <Avatar />
            <p>This is a message</p>
            <small>timestamp</small>
        </div>
    );
}

export default Message;