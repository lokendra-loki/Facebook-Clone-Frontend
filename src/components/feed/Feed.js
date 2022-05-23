// import React, { useContext, useEffect } from 'react'
// import Share from '../share/Share'
// import "./feed.scss"
// import Post from '../post/Post'
// import { useState } from 'react'
// import axios from 'axios'
// import { AuthContext } from '../../context/AuthContext'

// function Feed({ username }) {

//   //When we render this Feed component  we want to get the posts from the database
//   const [posts, setPosts] = useState([])

//   const { user } = useContext(AuthContext)

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const res = username ? await axios.get("/posts/profile/" + username)
//         : await axios.get("/posts/timeline/" + user._id)//current user ko user id ho
//       setPosts(res.data)
//     }
//     fetchPosts()

//     return () => {
//     };
//   }, [user._id, username]);//run this useEffect only once when you render the Feed component

//   return (
//     <div className='feed'>
//       <div className="feedWrapper">
//         <Share />
//         {posts.map((p, key) => (
//           <Post key={key} post={p} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Feed

//CLIENT SIDE ONLY==========================>
import Share from "../share/Share";
import "./feed.scss";
import Post from "../post/Post";

function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        <Post />
      </div>
    </div>
  );
}

export default Feed;
