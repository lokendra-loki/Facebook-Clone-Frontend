import React from 'react'
import "./post.scss"
import { MoreVert } from "@material-ui/icons"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';


function Post({ post }) {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLikeed] = useState(false);


    const [user, setUser] = useState({});//empty object
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`);//get user by id
            setUser(res.data)
        }
        fetchUser()
    }, [post.userId])


    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLikeed(!isLiked);
    }


    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">

                    {/* PostTopLeft */}
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                            <img className='postProfileImg' src={user.profilePicture || "/assets/person/noAvatar.png"} alt="" />
                        </Link>

                        <Link to={`/profile/${user.username}`} >
                            <span className="postUsername" >{user.username} </span>
                        </Link>




                        <span className="postDate">{format(post.createdAt)}  </span>
                    </div>

                    {/* PostTopRight */}
                    <div className="postTopRight">
                        <MoreVert />
                    </div>

                </div>

                {/* PostCenter- */}
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className='postImg' src={post.img} alt="" />

                </div>

                {/* PostButtom- */}
                <div className="postBottom">
                    {/* PostButtomLeft */}
                    <div className="postBottomLeft">
                        <img className='likeIcon' src="/assets/like.png" onClick={likeHandler} alt="" />
                        <img className='likeIcon' src="/assets/heart.png" onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>

                    {/* PostButtomRight */}
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Post