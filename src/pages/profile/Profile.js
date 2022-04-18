import React from 'react'
import "./profile.scss"
import Topbar from '../../components/topbar/Topbar'
import Leftbar from '../../components/leftbar/Leftbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'
import { useState, useEffect } from 'react'
import axios from 'axios'


function Profile() {
    const [user, setUser] = useState({})
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=lokendra`);
            setUser(res.data)
        }
        fetchUser()
    })




    return (
        <>
            <Topbar />
            <div className="profile">
                <Leftbar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileContainer">
                            <img className='coverPicture' src="/assets/post/3.jpeg" alt="" />
                            <img className='profilePicture' src="/assets/person/7.jpeg" alt="" />
                        </div>
                    </div>

                    <div className="profileInfo">
                        <h4 className='profileInfoName'>{user.username}</h4>
                        <span className="profileDescription">{user.desc}</span>
                    </div>

                    <div className="profileRightBottom">
                        <Feed username="lokendra" />
                        <Rightbar user={user} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profile