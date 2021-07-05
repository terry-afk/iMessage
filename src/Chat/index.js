import MicNoneIcon  from "@material-ui/icons/MicNone";
import { IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Message from '../Message'
import "./index.css"
import firebase from "firebase";
import db from "../Firebase"
import { useSelector } from "react-redux";
import { selectChatId, selectChatName } from "../features/chatSlice";
import { selectUser } from "../features/userSlice";

function Chat() {

    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const chatName = useSelector(selectChatName);
    const chatId = useSelector(selectChatId);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (chatId) {
            db.collection('chats')
            .doc(chatId)
            .collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => (
                setMessages(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                })))
            ));
        }
    }, [chatId])

    const sendMessage = (e) => {
        e.preventDefault();

        db.collection('chats')
        .doc(chatId)
        .collection('messages')
        .add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            uid: user.uid,
            photo: user.photo,
            email: user.email,
            displayName: user.displayName,
        })

        setInput("");
    };

    return (
        <div className="chat">
            {/* Chat header */}
            <div className="chat__header">
                <h4>
                    To: <span className="chat__name">{chatName}</span>
                </h4>
                <strong>Details</strong>
            </div>

            {/* Chat messages */}
            <div className="chat__messages">
                {messages.map(({ id, data }) => (
                    <Message key={id} contents={data}/>
                ))}
            </div>

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