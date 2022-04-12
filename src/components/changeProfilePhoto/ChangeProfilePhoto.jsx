import "./changeProfilePhoto.css";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { AddAPhoto } from "@material-ui/icons";

function ChangeProfilePhoto(user) {
    const [file, setFile] = useState(null);
    const { user: userContext, dispatch } = useContext(AuthContext);

    const changeProfilePhoto = (e) => {
        e.preventDefault();
        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            axios.post(`/upload/`, data)
                .then(() => {
                    console.log(user.user)
                    const newProfilePhoto = {
                        userId: user.user._id,
                        profilePicture: fileName,
                        idAdmin: true
                    }
                    axios.put(`/users/${user.user._id}`, newProfilePhoto);
                })
                .then(() => {
                    dispatch({ type: "CHANGE_PROFILE_PICTURE", payload: fileName });
                })
                .catch((err) => {
                    console.log(err);
                }).finally(() => {
                    window.location.reload();
                })
        }
    }

    return (
        <div>
            <form onSubmit={changeProfilePhoto}>
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
    )
}

export default ChangeProfilePhoto;