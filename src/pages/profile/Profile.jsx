import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { AddAPhoto } from "@material-ui/icons";

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});
    const username = useParams().username;
    const [file, setFile] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=${username}`);
            setUser(res.data);
        };
        fetchUser();
    }, [username]);

    const changeProfilePhoto = () => {
        console.log(file)
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
        };
        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newPost.img = fileName;
            try {
                await axios.post("/upload", data);
            } catch (err) { }
        }
        try {
            await axios.post("/posts", newPost);
            window.location.reload();
        } catch (err) { }
    };

    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img
                                className="profileCoverImg"
                                src={
                                    user.coverPicture
                                        ? PF + user.coverPicture
                                        : PF + "person/noCover.png"
                                }
                                alt=""
                            />
                            <div className="profilePhotoSection">
                                <img
                                    className="profileUserImg"
                                    src={
                                        user.profilePicture
                                            ? PF + user.profilePicture
                                            : PF + "person/noAvatar.png"
                                    }
                                    alt=""
                                />
                                <form onSubmit={changeProfilePhoto()}>
                                    <label htmlFor="file" >
                                        <span className="profileChangeUserImg">
                                            <AddAPhoto className="addAPhotoIcon" />
                                            <input
                                                style={{ display: "none" }}
                                                type="file"
                                                id="file"
                                                accept=".png,.jpeg,.jpg"
                                                onChange={(e) => setFile(e.target.files[0])}
                                            />
                                            <button type="submit">Aceptar</button>
                                        </span>
                                    </label>
                                </form>
                            </div>
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">{user.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={username} />
                        <Rightbar user={user} />
                    </div>
                </div>
            </div>
        </>
    );
}