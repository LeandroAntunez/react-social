import { React, useEffect, useState } from "react";
import ChangeProfilePhoto from '../changeProfilePhoto/ChangeProfilePhoto';
import axios from "axios";
import { useParams } from "react-router";

function ProfileCover() {
    const [user, setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const username = useParams().username;

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=${username}`);
            setUser(res.data);
        };
        fetchUser();
    }, [username]);

    return (
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
                <ChangeProfilePhoto user={user} />
            </div>
        </div>
    )
}

export default ProfileCover;