import React from 'react'
import "./rightbar.scss"
import Online from '../online/Online'



// //taking props from profile page i.e taking user from profile page
//basically profile page is parents and rightbar is child.now user ko every detail yeta aaiyo
function Rightbar({user}) {
  


  //online friends and birthday notification container
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          {/* BirthdatContainer------------------------------ */}
          <img src="/assets/gift.png" alt="" className="birthdayImage" />
          <span className="birthdayText"><b>Samir</b> and <b>three other friends</b> have a birthday today</span>
        </div>

        {/* RightBarAd--------------------------------- */}
        <img src="/assets/ad.png" alt="" className="rightBarAd" />
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendList">

          {/* online friend  */}
          {/* <Online /> */}

        </ul>
      </>
    )
  }



  //Profile detail section and user friend container
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="userInfo">User Information</h4>
        <div className="rightBarInfoContainer">

          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoValue">{user.city}</span>
          </div>

          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoValue">{user.from}</span>
          </div>

          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship:</span>
            <span className="rightBarInfoValue">{user.relationship===1 ? "single" : user.relationship===2 ? "married" : "_"}</span>
          </div>

        </div>

        <h4>User Friends</h4>
        <div className="rightBarFollowings">
          <div className="eachRightBarFollowing">
            <img src="/assets/person/4.jpeg" alt="" className="rightBarFollowingImage" />
            <span className="rightBarFollowingUsername">Sunil Khatri</span>
          </div>

          <div className="eachRightBarFollowing">
            <img src="/assets/person/3.jpeg" alt="" className="rightBarFollowingImage" />
            <span className="rightBarFollowingUsername">Sunil Khatri</span>
          </div>

          <div className="eachRightBarFollowing">
            <img src="/assets/person/9.jpeg" alt="" className="rightBarFollowingImage" />
            <span className="rightBarFollowingUsername">Sunil Khatri</span>
          </div>

        </div>
      </>
    )
  }

  

  
  return (
    <div className='rightBar'>
      <div className="rightBarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}

export default Rightbar




// //CLIENT ONLY==========================>
// import React from 'react'
// import "./rightbar.scss"
// import Online from '../online/Online'



// function Rightbar() {


//   const user = true

  
//   const HomeRightbar = () => {
//     return (
//       <>
//         <div className="birthdayContainer">
//           {/* BirthdatContainer------------------------------ */}
//           <img src="/assets/gift.png" alt="" className="birthdayImage" />
//           <span className="birthdayText"><b>Samir</b> and <b>three other friends</b> have a birthday today</span>
//         </div>

//         {/* RightBarAd--------------------------------- */}
//         <img src="/assets/ad.png" alt="" className="rightBarAd" />
//         <h4 className="rightBarTitle">Online Friends</h4>
//         <ul className="rightBarFriendList">

//           {/* online friend  */}
//           <Online />

//         </ul>
//       </>
//     )
//   }


//   //Profile detail section
//   const ProfileRightbar = () => {
//     return (
//       <>
//         <h4 className="userInfo">User Information</h4>
//         <div className="rightBarInfoContainer">

//           <div className="rightBarInfoItem">
//             <span className="rightBarInfoKey">City:</span>
//             <span className="rightBarInfoValue">Kathmandu, Nepal</span>
//           </div>

//           <div className="rightBarInfoItem">
//             <span className="rightBarInfoKey">From:</span>
//             <span className="rightBarInfoValue">Tikapur Kailali</span>
//           </div>

//           <div className="rightBarInfoItem">
//             <span className="rightBarInfoKey">Relationship:</span>
//             <span className="rightBarInfoValue">single</span>
//           </div>

//         </div>

//         <h4>User Friends</h4>
//         <div className="rightBarFollowings">
//           <div className="eachRightBarFollowing">
//             <img src="/assets/person/4.jpeg" alt="" className="rightBarFollowingImage" />
//             <span className="rightBarFollowingUsername">Sunil Khatri</span>
//           </div>

//           <div className="eachRightBarFollowing">
//             <img src="/assets/person/3.jpeg" alt="" className="rightBarFollowingImage" />
//             <span className="rightBarFollowingUsername">Sunil Khatri</span>
//           </div>

//           <div className="eachRightBarFollowing">
//             <img src="/assets/person/9.jpeg" alt="" className="rightBarFollowingImage" />
//             <span className="rightBarFollowingUsername">Sunil Khatri</span>
//           </div>

//         </div>
//       </>
//     )
//   }

  

  
//   return (
//     <div className='rightBar'>
//       <div className="rightBarWrapper">
//         {user ? <ProfileRightbar /> : <HomeRightbar />}
//       </div>
//     </div>
//   )
// }

// export default Rightbar