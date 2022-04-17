import React from 'react'
import Share from '../share/Share'
import "./feed.scss"
import Post from '../post/Post'
import { useState, useEffect } from 'react'
import axios from 'axios'


function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts/timeline/624da824013d67d405ab116e")
      setPosts(res.data)
    }
    fetchPosts()
  }, [])


  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  )
}
export default Feed