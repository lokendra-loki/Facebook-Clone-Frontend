// import React from 'react'
// import "./post.scss"
// import { MoreVert } from "@material-ui/icons"
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { format } from 'timeago.js';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../../context/AuthContext';
// import { useContext } from 'react';


// function Post({ post }) {

//     const { user: currentUser } = useContext(AuthContext)

//     useEffect(() => {
//         setIsLikeed(post.likes.includes(currentUser._id));
//     }, [currentUser._id, post.likes])


//     //Like Dislike handler
//     const [like, setLike] = useState(post.likes.length);
//     const [isLiked, setIsLikeed] = useState(false);
//     const likeHandler = () => {
//         try {
//             axios.put("/posts/" + post._id + "/like", { userId: currentUser._id })
//         } catch (err) { }
//         setLike(isLiked ? like - 1 : like + 1);
//         setIsLikeed(!isLiked);
//     }


//     //To show user data in post
//     const [user, setUser] = useState({});
//     useEffect(() => {
//         const fetchUser = async () => {
//             const res = await axios.get(`/users?userId=${post.userId}`);
//             setUser(res.data)
//         }
//         fetchUser()
//     }, [post.userId])


//     return (
//         <div className='post'>
//             <div className="postWrapper">
//                 <div className="postTop">

//                     <div className="postTopLeft">
//                         <Link to={`profile/${user.username}`}   >
//                             <img className='postProfileImg' src={user.profilePicture} alt="" />
//                         </Link>

//                         <Link to={`/profile/${user.username}`} style={{ textDecoration: "none" }} >
//                             <span className="postUsername" >{user.username} </span>
//                         </Link>

//                         <span className="postDate">{format(post.createdAt)} </span>
//                     </div>

//                     <div className="postTopRight">
//                         <MoreVert />
//                     </div>
//                 </div>

//                 <div className="postCenter">
//                     <span className="postText">{post.desc}</span>
//                     <img className='postImg' src={post.img} alt="" />
//                 </div>

//                 <div className="postBottom">
//                     <div className="postBottomLeft">
//                         <img className='likeIcon' src="/assets/like.png" onClick={likeHandler} alt="" />
//                         <img className='likeIcon' src="/assets/heart.png" onClick={likeHandler} alt="" />
//                         <span className="postLikeCounter">{like} people like it</span>
//                     </div>

//                     <div className="postBottomRight">
//                         <span className="postCommentText">{post.comment} comments</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Post


//===========================================================>
import React, { useEffect, useState } from 'react'
import "./post.scss"
import { MoreVert } from "@material-ui/icons"
import axios from 'axios';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';



function Post({ post }) {

    //Like dislike handler--------------------->
    const [like, setLike] = useState(post.likes.length);//likes array ko length
    const [isLiked, setIsLikeed] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLikeed(!isLiked);
    }


    //----------------------------------------->
    //Fetching user according to th post. post ko userId bata user fetch garey ko
    const [user, setUser] = useState({})

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users/?userId=${post.userId}`)//post ko userId bata user fetch garey ko
            console.log(res.data)
            setUser(res.data)
        }
        fetchUser()

    }, [post.userId]);




    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">

                        <Link to={`profile/${user.username}`}>
                            <img className='postProfileImg' src={user.profilePicture || "/assets/person/default.jpeg"} alt="" />
                        </Link>

                        <Link to={`profile/${user.username}`} className="link"  >
                            <span className="postUsername" >{user.username}</span>
                        </Link>

                        <span className="postDate">{format(post.createdAt)} </span>
                    </div>

                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>

                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img className='postImg' src={post.img || "/assets/post/default.jpeg"} alt="" />
                </div>

                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src="/assets/like.png" onClick={likeHandler} alt="" />
                        <img className='likeIcon' src="/assets/heart.png" onClick={likeHandler} alt="" />
                        <span className="postLikeCounter"> {like} people like it</span>
                    </div>

                    <div className="postBottomRight">
                        <span className="postCommentText">comments</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Post


































//  CLIENT SIDE ONLY==========================>
// import React, { useState } from 'react'
// import "./post.scss"
// import { MoreVert } from "@material-ui/icons"


// function Post({ post }) {

//     //Like dislike handler
//     const [like, setLike] = useState(post.like);
//     const [isLiked, setIsLikeed] = useState(false);

//     const likeHandler = () => {
//         setLike(isLiked ? like - 1 : like + 1);
//         setIsLikeed(!isLiked);
//     }


//     return (
//         <div className='post'>
//             <div className="postWrapper">
//                 <div className="postTop">
//                     <div className="postTopLeft">
//                         <img className='postProfileImg' src="assets/person/7.jpeg" alt="" />
//                         <span className="postUsername" >Loki Chaulagain</span>
//                         <span className="postDate">4 days ago</span>
//                     </div>

//                     <div className="postTopRight">
//                         <MoreVert />
//                     </div>
//                 </div>

//                 <div className="postCenter">
//                     <span className="postText">This the the text of my post demo</span>
//                     <img className='postImg' src="assets/post/10.jpeg" alt="" />
//                 </div>

//                 <div className="postBottom">
//                     <div className="postBottomLeft">
//                         <img className='likeIcon' src="/assets/like.png" onClick={likeHandler} alt="" />
//                         <img className='likeIcon' src="/assets/heart.png" onClick={likeHandler} alt="" />
//                         <span className="postLikeCounter"> {like} people like it</span>
//                     </div>

//                     <div className="postBottomRight">
//                         <span className="postCommentText">45 comments</span>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Post
















