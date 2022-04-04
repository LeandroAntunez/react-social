import "./message.css";
import {format} from "timeago.js";

export default function Message({message, own}) {
  return (
    <div className={own ? "message own" : "message"}>
        <div className="messageTop">
            <img
            className="messageImg"
            src="https://st.depositphotos.com/2672167/3891/v/950/depositphotos_38917489-stock-illustration-john-doe-illustration.jpg"
            alt="" 
            />
            <p className="messageText">
              {message.text}
            </p>
        </div>
        <div className="messageBottom">
            {format(message.createdAt)}
        </div>
    </div>
  )
}
