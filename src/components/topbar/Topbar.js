import React from 'react'
import "./topbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom'


//topbar kp profile according to user login
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'



function Topbar() {

    const { user } = useContext(AuthContext)





    return (
        <div className='topbarContainer'>

            {/* Topbar left */}
            <div className="topbarLeft">
                <Link to="/" style={{ textDecoration: "none" }} >
                    <span className="logo">Facebook</span>
                </Link>
            </div>

            {/* Topbar Center */}
            <div className="topbarCenter">
                <div className="searchbar">
                    <SearchIcon className='searchIcon' />
                    <input placeholder='Search for friends, post or video' className="searchInput" />
                </div>
            </div>


            {/* Topbar left */}
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLinks">HomePage</span>
                    <span className="topbarLinks">Timeline</span>
                </div>

                <div className="topbarIcons">

                    <div className="topbarIconItem">
                        <PersonIcon />
                        <span className="topbarIconBadge">1</span>
                    </div>

                    <div className="topbarIconItem">
                        <ChatIcon />
                        <span className="topbarIconBadge">4</span>
                    </div>

                    <div className="topbarIconItem">
                        <NotificationsIcon />
                        <span className="topbarIconBadge">2</span>
                    </div>
                </div>


                <Link to={`/profile/${user.username}`}>
                    <img src={user.profilePicture || "assets/person/1.jpeg"} alt="" className="profilePic" />
                </Link>



            </div>

        </div>
    )
}

export default Topbar