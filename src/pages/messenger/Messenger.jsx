import "./messenger.css"
import Topbar from "../../components/topbar/Topbar";

export default function Messenger() {
    return (
        <div className="messenger">
            <Topbar />
            <div className="chatMenu"></div>
            <div className="chatBox"></div>
            <div className="chatOnline"></div>
        </div>
    )
}
