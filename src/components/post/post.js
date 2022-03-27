import React from 'react'
import "./post.scss"
import { MoreVert } from "@material-ui/icons"

function Post() {
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">

                    {/* PostTopLeft-------------------------------- */}
                    <div className="postTopLeft">
                        <img className='postProfileImg' src="/assets/person/1.jpeg" alt="" />
                        <span className="postUsername">Loki Chaulagain</span>
                        <span className="postDate">5 mins ago</span>
                    </div>

                    {/* PostTopRight-------------------------------- */}
                    <div className="postTopRight">
                        <MoreVert />
                    </div>

                </div>

                {/* PostCenter-------------------------------- */}
                <div className="postCenter">
                    <span className="postText">Hey! Its my first post</span>
                    <img className='postImg' src="/assets/post/1.jpeg" alt="" />

                </div>

                {/* PostButtom-------------------------------- */}
                <div className="postBottom">
                    {/* PostButtomLeft-------------------------------- */}
                    <div className="postBottomLeft">
                        <img className='likeIcon' src="/assets/like.png" alt="" />
                        <img className='likeIcon' src="/assets/heart.png" alt="" />
                        <span className="postLikeCounter">32 people like it</span>
                    </div>

                    {/* PostButtomRight-------------------------------- */}
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Post