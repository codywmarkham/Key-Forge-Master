import { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { Posts } from "../../dummyData";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/" + user._id);
        
          if ( res && res.data && res.data.length > 0){
            console.log(res.data)
            setPosts(res.data.sort((p1,p2)=>{
              return new Date(p2.createdAt) - new Date(p1.createdAt);
            }))
          } 
          
    };
    fetchPosts();
  }, [username, user._id, posts]);
  if (posts){
    return (
      <div className="feed">
      <div className="feedWrapper">
        {(!username || username === user.username) && <Share />}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  
  );
  } else {return null}
  
}
