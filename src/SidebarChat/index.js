import React from "react"
import "./index.css"
import { Avatar } from "@material-ui/core"
import { useDispatch } from "react-redux";
import { setChat } from '../features/chatSlice'

function SidebarChat({id, chatName}) {

    const dispatch = useDispatch();

    return (
        <div onClick={() =>
            dispatch(
                setChat({
                    chatId: id,
                    chatName: chatName
                })
            )
        } className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h3>{chatName}</h3>
                <p>Last message sent...</p>
                <small>timestamp</small>
            </div>
        </div>
    );
}

export default SidebarChat;