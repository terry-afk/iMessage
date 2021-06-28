import React from "react"
import "./index.css"
import { Avatar } from "@material-ui/core"

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h3>Channel Name</h3>
                <p>Last message sent...</p>
                <small>timestamp</small>
            </div>
        </div>
    );
}

export default SidebarChat;