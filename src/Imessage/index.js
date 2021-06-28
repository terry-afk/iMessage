import React from "react"
import "./index.css"
import Sidebar from "../Sidebar"
import Chat from "../Chat"

function Imessage() {
    return <div className="imessage">
        {/* Sidebar */}
        <Sidebar />
        {/* Chat */}
        <Chat />
    </div>
}

export default Imessage;