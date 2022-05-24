import React, { useContext, useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import axios from "axios";
import "./editProfile.scss";
import { AuthContext } from "../../context/authContext/AuthContext";

function EditProfile({ viewUser }) {
  const userDetailId = viewUser._id;
  console.log(userDetailId);

  ///////////////////////////////////
  // const { user } = useContext(AuthContext);

  //Fetching data from URl id
  // const location = useLocation();
  // const path = location.pathname.split("/")[2];
  // console.log(path);

  //At first user create profile with username and email
  //suppose user has not created any user detail yet then we cant be able to show name on profile
  //so we will show username from id not from detail
  // const [getUser, setGetUser] = useState({});
  // useEffect(() => {
  //   const fetchInfo = async () => {
  //     const res = await axios.get(`/users/get/${path}`);
  //     setGetUser(res.data);
  //   };
  //   fetchInfo();
  // }, [path]);

  // //Fetching userDetail according to userID element
  // const [viewUser, setViewUser] = useState({});
  // useEffect(() => {
  //   const fetchUserDetail = async () => {
  //     try {
  //       const res = await axios.post("/userDetail/userDetailData", {
  //         userID: path,
  //       });
  //       setViewUser(res.data[0]);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchUserDetail();
  // }, [path]);
  // console.log(viewUser);

  ///////////////////////////////////////////
  //Edit Profile info
  const [currentJobPosition1, setCurrentJobPosition1] = useState("");
  const [currentJobCompany1, setCurrentJobCompany1] = useState("");
  const [currentJobPosition2, setCurrentJobPosition2] = useState("");
  const [currentJobCompany2, setCurrentJobCompany2] = useState("");
  const [founderOf1, setFounderOf1] = useState("");
  const [founderOf2, setFounderOf2] = useState("");
  const [currentStudyingCourse, setCurrentStudyingCourse] = useState("");
  const [currentStudyingUniversity, setCurrentStudyingUniversity] =
    useState("");
  const [graduatedCourse, setGraduatedCourse] = useState("");
  const [graduatedUniversity, setGraduatedUniversity] = useState("");
  const [plus2CompletedCollege, setPlus2CompletedCollege] = useState("");
  const [plus2CompletedCollegeLocation, setPlus2CompletedCollegeLocation] =
    useState("");
  const [sEECompletedCollege, setSEECompletedCollege] = useState("");
  const [sEECompletedCollegeLocation, setSEECompletedCollegeLocation] =
    useState("");

  const saveUserDetail = {
    currentJobPosition1,
    currentJobCompany1,
    currentJobPosition2,
    currentJobCompany2,
    founderOf1,
    founderOf2,
    currentStudyingCourse,
    currentStudyingUniversity,
    graduatedCourse,
    graduatedUniversity,
    plus2CompletedCollege,
    plus2CompletedCollegeLocation,
    sEECompletedCollege,
    sEECompletedCollegeLocation,
  };

  const handleUserInfoSave = async () => {
    try {
      const res = await axios.put(
        `/userDetail/update/${userDetailId}`,
        saveUserDetail
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <form className="editProfileInputCon" onSubmit={handleUserInfoSave}>
      <div className="epiRow1">
        <span className="epiEditProfile">Edit Profile</span>
        <div className="epiClearCon">
          <ClearIcon className="epiClearIcon" />
        </div>
      </div>
      <hr className="epiHr1" />

      <div className="epiRow2">
        <span className="epiProfilePic">Profile Picture</span>
        <span className="epiEdit">Edit</span>
      </div>
      <img src="" alt="" className="epiProfilePicAvatar" />

      <div className="epiRow3">
        <span className="epiCoverPic">Cover Picture</span>
        <span className="epiEdit3">Edit</span>
      </div>
      <img src="" alt="" className="epiCoverPicAvatar" />

      <span className="epiBio">Bio</span>
      <textarea className="epiBioInput" placeholder="Write your Bio here" />

      {/* User information input ==============================*/}
      <span className="userInfoInputConTitle">Currently Working</span>
      <div className="userInfoInputCon">
        <BusinessCenterIcon className="userInfoEditIcon" />
        <input
          type="text"
          className="userInfoInput"
          placeholder="Position"
          onChange={(e) => setCurrentJobPosition1(e.target.value)}
        />
        <input
          type="text"
          className="userInfoInput"
          placeholder="company Name"
          onChange={(e) => setCurrentJobCompany1(e.target.value)}
        />
      </div>

      <span className="userInfoInputConTitle">Currently Working</span>
      <div className="userInfoInputCon">
        <BusinessCenterIcon className="userInfoEditIcon" />
        <input
          type="text"
          className="userInfoInput"
          placeholder="Position"
          onChange={(e) => setCurrentJobPosition2(e.target.value)}
        />
        <input
          type="text"
          className="userInfoInput"
          placeholder="company Name"
          onChange={(e) => setCurrentJobCompany2(e.target.value)}
        />
      </div>

      <span className="userInfoInputConTitle">Founder of</span>
      <div className="userInfoInputCon">
        <BusinessCenterIcon className="userInfoEditIcon" />
        <input
          type="text"
          className="userInfoInput"
          placeholder="CompanyName"
          onChange={(e) => setFounderOf1(e.target.value)}
        />
      </div>

      <span className="userInfoInputConTitle">Founder of</span>
      <div className="userInfoInputCon">
        <BusinessCenterIcon className="userInfoEditIcon" />
        <input
          type="text"
          className="userInfoInput"
          placeholder="Company Name"
          onChange={(e) => setFounderOf2(e.target.value)}
        />
      </div>

      <span className="userInfoInputConTitle">Currently Studying</span>
      <div className="userInfoInputCon">
        <BusinessCenterIcon className="userInfoEditIcon" />
        <input
          type="text"
          className="userInfoInput"
          placeholder="Course"
          onChange={(e) => setCurrentStudyingCourse(e.target.value)}
        />
        <input
          type="text"
          className="userInfoInput"
          placeholder="College/School"
          onChange={(e) => setCurrentStudyingUniversity(e.target.value)}
        />
      </div>

      <span className="userInfoInputConTitle">Graduated from</span>
      <div className="userInfoInputCon">
        <BusinessCenterIcon className="userInfoEditIcon" />
        <input
          type="text"
          className="userInfoInput"
          placeholder="Course"
          onChange={(e) => setGraduatedCourse(e.target.value)}
        />
        <input
          type="text"
          className="userInfoInput"
          placeholder="College"
          onChange={(e) => setGraduatedUniversity(e.target.value)}
        />
      </div>

      <span className="userInfoInputConTitle">+2 Completed from</span>
      <div className="userInfoInputCon">
        <BusinessCenterIcon className="userInfoEditIcon" />
        <input
          type="text"
          className="userInfoInput"
          placeholder="College"
          onChange={(e) => setPlus2CompletedCollege(e.target.value)}
        />
        <input
          type="text"
          className="userInfoInput"
          placeholder="Address"
          onChange={(e) => setPlus2CompletedCollegeLocation(e.target.value)}
        />
      </div>

      <span className="userInfoInputConTitle">SEE completed from</span>
      <div className="userInfoInputCon">
        <BusinessCenterIcon className="userInfoEditIcon" />
        <input
          type="text"
          className="userInfoInput"
          placeholder="School"
          onChange={(e) => setSEECompletedCollege(e.target.value)}
        />
        <input
          type="text"
          className="userInfoInput"
          placeholder="Address"
          onChange={(e) => setSEECompletedCollegeLocation(e.target.value)}
        />
      </div>
      <button className="save" type="submit">
        save
      </button>
    </form>
  );
}

export default EditProfile;
