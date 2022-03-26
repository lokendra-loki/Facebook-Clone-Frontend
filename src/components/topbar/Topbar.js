import React from 'react'
import "./topbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';


function Topbar() {
    return (
        <div className='topbarContainer'>

            {/* Topbar left--------------------------------------------- */}
            <div className="topbarLeft">
                <span className="logo">Facebook</span>
            </div>

            {/* Topbar Center--------------------------------------------- */}
            <div className="topbarCenter">
                <div className="searchbar">
                    <SearchIcon className='searchIcon' />
                    <input placeholder='Search for friends, post or video' className="searchInput" />
                </div>
            </div>


            {/* Topbar left--------------------------------------------- */}
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

                <img src="/assets/person/1.jpeg" alt="" className="profilePic" />


            </div>

        </div>
    )
}

export default Topbar