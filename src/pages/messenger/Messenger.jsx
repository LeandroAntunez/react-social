import "./messenger.css";
import Topbar from "../../components/topbar/Topbar";
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { AuthContext } from "../../context/AuthContext";
import { useEffect, useContext, useState } from "react";
import axios from "axios";

export default function Messenger() {
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get("/conversations/" + user._id);
                setConversations(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getConversations();
    }, [user._id]);

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get("/messages/" + currentChat?._id);
                setMessages(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getMessages();
    }, [currentChat]);

    const handleSubmit = async (e) => {
        e.preventDevault();
        const message = {
            sender: user._id,
            text: newMessage,
            conversationId: currentChat._id
        };

        try {
            const res = await axios.post("/messages", message);
            setMessages(...messages, res.data);
            setNewMessage("")
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <>
            <Topbar />
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input type="text" placeholder="Search for friends" className="chatMenuInput" />
                        {conversations.map((c) => {
                            <div onClick={() => setCurrentChat(c)}>

                                <Conversation conversation={c} currentUser={user} />
                            </div>
                        })}
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        {
                            currentChat ?
                                <>
                                    <div className="chatBoxTop">
                                        {messages.map(m => {
                                            <Message message={m} own={m.sender === user._id} />
                                        })}
                                    </div>
                                    <div className="chatBoxBottom">
                                        <textarea
                                        className="chatMessageInput"
                                        placeholder="write something..."
                                        onChange={(e)=>setNewMessage(e.target.value)}
                                        value={newMessage}
                                        ></textarea>
                                        <button className="chatSubmitButton" onClick={handleSubmit}>Send</button>
                                    </div>
                                </> : <span className="noConversationText">Open a conversation to start a chat.</span>}
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        <ChatOnline />
                        <ChatOnline />
                        <ChatOnline />
                    </div>
                </div>
            </div>
        </>
    )
}
