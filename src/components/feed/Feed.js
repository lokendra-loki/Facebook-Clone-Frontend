import React from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import "./feed.scss"
import { useState, useEffect } from 'react'
import axios from 'axios'


function Feed() {
  //useState Hook
  const [posts, setPosts] = useState([])//initial state empty array

  //when the post component is rendered, it will fetch post to the array using useEffect Hook
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("posts/timeline/624da824013d67d405ab116e")//get posts by user id
     setPosts(res.data)//set posts to the array
    }
    fetchPosts()

  }, [])//render this feed only one time


  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share />

        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}


      </div>
    </div>
  )
}

export default Feed