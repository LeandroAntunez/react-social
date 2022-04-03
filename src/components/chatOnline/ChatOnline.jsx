import "./chatOnline.css";

export default function ChatOnline() {
    return (
        <div className="chatOnline">
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img className="chatOnlineImg" src="https://st.depositphotos.com/2672167/3891/v/950/depositphotos_38917489-stock-illustration-john-doe-illustration.jpg" alt="" />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">John Doe</span>
            </div>
        </div>
    )
}
