import "./message.css"

export default function Message({own}) {
  return (
    <div className={own ? "message own" : "message"}>
        <div className="messageTop">
            <img
            className="messageImg"
            src="https://st.depositphotos.com/2672167/3891/v/950/depositphotos_38917489-stock-illustration-john-doe-illustration.jpg"
            alt="" 
            />
            <p className="messageText">Hello this is a message</p>
        </div>
        <div className="messageBottom">
            1 hour ago
        </div>
    </div>
  )
}
