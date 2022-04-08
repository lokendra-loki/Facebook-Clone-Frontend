import React from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import "./feed.scss"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'



function Feed({ username }) {
  const [posts, setPosts] = useState([])


  //Feed posts kp lagi everyone ko post 
  const { user } = useContext(AuthContext)









  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/" + user._id)

      setPosts(res.data)//set posts to the array
    }
    fetchPosts()

  }, [username ,user._id])//render this feed only one time


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