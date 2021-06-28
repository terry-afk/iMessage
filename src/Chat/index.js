import MicNoneIcon  from "@material-ui/icons/MicNone";
import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import "./index.css"

function Chat() {

    const [input, setInput] = useState('')

    const sendMessage = (e) => {
        e.preventDefault();

        // Firebase magic...
        setInput("");
    };

    return (
        <div className="chat">
            {/* Chat header */}
            <div className="chat__header">
                <h4>
                    To: <span className="chat__name">Channel name</span>
                </h4>
                <strong>Details</strong>
            </div>

            {/* Chat messages */}

            {/* Chat input */}
            <div className="chat__input">
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder="iMessage" type="text" />
                    <button onClick={sendMessage}>Send Message</button>
                </form>

                <IconButton>
                    <MicNoneIcon className="chat__mic" />
                </IconButton>
            </div>
        </div>
    );
}

export default Chat;