import { useEffect, useState } from "react";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";
import Post from "../post/Post";

function Feed({username}) {
    const [posts, setPosts] = useState([]);
    const [text, setText] = useState("");

    useEffect(() => {
        const fetchPosts = async () => {
            const res = username
            ? await axios.get("posts/profile/"+username)
            : await axios.get("posts/timeline/605b3d777a3cf74918165c05")
            setPosts(res.data)
        }
        fetchPosts();
    }, [username]);
    return (
        <div className="feed">
            <input type="text" onChange={e => setText(e.target.value)} />
            <div className="feedWrapper">
                <Share />
                {posts.map((p) => (
                    <Post key={p._id} post={p} />
                ))}
            </div>
        </div>
    );
}

/*
*/

export default Feed;