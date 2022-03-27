import React from 'react'
import Share from '../share/Share'
import "./feed.scss"

function Feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share />
      </div>
    </div>
  )
}

export default Feed