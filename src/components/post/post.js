import React from 'react'
import "./post.scss"
import { MoreVert } from "@material-ui/icons"
import { useState } from 'react';





function Post({ post }) {

    // -----------------------------------
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLikeed] = useState(false);
    // ---------------------------------
    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLikeed(!isLiked);

    }
    //-------------------------------




    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">

                    {/* PostTopLeft-------------------------------- */}
                    <div className="postTopLeft">
                        <img className='postProfileImg' src="/assets/person/1.jpeg" alt="" />
                        {/* <img className="postProfileImg" src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt=""/> */}





                        <span className="postUsername">loki chaulagain</span>
                        {/* <span className="postUsername">
                        {Users.filter((u) => u.id === post?.userId)[0].username}
                        </span> */}
                        <span className="postDate">{post.date}</span>
                    </div>

                    {/* PostTopRight-------------------------------- */}
                    <div className="postTopRight">
                        <MoreVert />
                    </div>

                </div>

                {/* PostCenter-------------------------------- */}
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className='postImg' src={post.photo} alt="" />

                </div>

                {/* PostButtom-------------------------------- */}
                <div className="postBottom">
                    {/* PostButtomLeft-------------------------------- */}
                    <div className="postBottomLeft">
                        <img className='likeIcon' src="/assets/like.png" onClick={likeHandler} alt="" />
                        <img className='likeIcon' src="/assets/heart.png" onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>

                    {/* PostButtomRight-------------------------------- */}
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Post