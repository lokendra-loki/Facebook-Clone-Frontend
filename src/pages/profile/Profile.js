// import React, { useEffect, useState } from "react";
// import "./profile.scss";
// import Topbar from "../../components/topbar/Topbar";
// import Leftbar from "../../components/leftbar/Leftbar";
// import Rightbar from "../../components/rightbar/Rightbar";
// import Feed from "../../components/feed/Feed";
// import axios from "axios";

// //url bata username lina ko lagi import
// import { useParams } from "react-router";

// function Profile() {
//   //url bata username lina ko lagi
//   // const params = useParams()
//   // console.log(params);//we get username from here

//   const username = useParams().username;

//   //fetching profile information (not user feed )
//   const [user, setUser] = useState({});

//   useEffect(() => {
//     const fetchUser = async () => {
//       const res = await axios.get(`/users?username=${username}`);
//       // console.log(res)
//       setUser(res.data);
//     };
//     fetchUser();
//   }, [username]);

//   return (
//     <>
//       <Topbar />
//       <div className="profile">
//         <Leftbar />
//         <div className="profileRight">
//           <div className="profileRightTop">
//             <div className="profileContainer">
//               <img
//                 className="coverPicture"
//                 src={user.coverPicture || "/assets/post/default.jpeg"}
//                 alt=""
//               />
//               <img
//                 className="profilePicture"
//                 src={user.profilePicture || "/assets/person/default.jpeg"}
//                 alt=""
//               />
//             </div>
//           </div>

//           <div className="profileInfo">
//             <h4 className="profileInfoName">{user.username}</h4>
//             <span className="profileDescription">{user.desc}</span>
//           </div>

//           <div className="profileRightBottom">
//             {/* profile ma feed call garya xau but yo feed ma no timeline post only user ko post hunu paryo  */}
//             {/* you are not in timeline you are in profile page */}
//             <Feed username={username} />

//             {/* now yo page ko user lai right bar ma send garne */}
//             <Rightbar user={user} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Profile;

//CLIENT ONLY==========================>
import React from "react";
import "./profile.scss";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileContainer">
              <img
                className="coverPicture"
                src="/assets/post/default.jpeg"
                alt=""
              />
              <img
                className="profilePicture"
                src="/assets/person/default.jpeg"
                alt=""
              />
            </div>
          </div>

          <div className="profileInfo">
            <h4 className="profileInfoName">Lokendra Chaulagain</h4>
            <span className="profileDescription">
              This is profile description
            </span>
          </div>

          <div className="profileRightBottom">
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
