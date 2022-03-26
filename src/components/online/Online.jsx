import "./online.css";

function Online({user}) {
    return (
            <li className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                    <img
                        className="rightbarProfileImg"
                        src={user.profilePicture}
                        alt=""
                    />
                    <span className="rightbarOnline"></span>
                    <span className="rightbarUsername">{user.username}</span>
                </div>
            </li>
    )
}
export default Online;