import React from 'react'
import "./profile.scss"
import Topbar from '../../components/topbar/Topbar'
import Leftbar from '../../components/leftbar/Leftbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'

function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Leftbar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        {/* profileCoverContainer */}
                        <div className="profileContainer">
                            <img className='coverPicture' src="/assets/post/3.jpeg" alt="" />
                            <img className='profilePicture' src="/assets/person/7.jpeg" alt="" />
                        </div>
                    </div>

                    <div className="profileInfo">
                        <h4 className='profileInfoName'>Loki Chaulagain</h4>
                        <span className="profileDescription">Hi I am a Software Engineer at Google</span>
                    </div>


                    <div className="profileRightBottom">

                        {/*  yo feed ma chai user ko post matra hunxa */}
                        <Feed  username="lokendra"/>
                        <Rightbar profile/>
                        {/* here profile is the props */}
                    </div>


                </div>

            </div>
        </>
    )
}

export default Profile