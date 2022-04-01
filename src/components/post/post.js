import React from 'react'
import "./post.scss"
import { MoreVert } from "@material-ui/icons"



function Post({ post }) {
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">

                    {/* PostTopLeft-------------------------------- */}
                    <div className="postTopLeft">
                        <img className='postProfileImg' src="/assets/person/1.jpeg" alt="" />
                        <span className="postUsername">loki chaulagain</span>
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
                        <img className='likeIcon' src="/assets/like.png" alt="" />
                        <img className='likeIcon' src="/assets/heart.png" alt="" />
                        <span className="postLikeCounter">{post.like} people like it</span>
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