import Conversation from "../conversations/Conversation";
import { useEffect, useState } from "react";
import axios from "axios";
import "./chatMenu.css";

function ChatMenu({user, setCurrentChat}) {
    const [conversations, setConversations] = useState([]);

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

    return (
        <div className="chatMenu">
            <div className="chatMenuWrapper">
                <input placeholder="Search for friends" className="chatMenuInput" />
                {conversations.map((c) => (
                    <div onClick={() => setCurrentChat(c)} key={c._id}>
                        <Conversation conversation={c} currentUser={user} />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ChatMenu;