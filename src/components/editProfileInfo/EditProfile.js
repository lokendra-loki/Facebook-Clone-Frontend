import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import "./editProfile.scss";

function EditProfile({ viewUser, closeEditCon }) {
  const userDetailId = viewUser?._id;
  const { user } = useContext(AuthContext);

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

  const [from, setFrom] = useState("");
  const [currentlyLiving, setCurrentlyLiving] = useState("");

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
    from,
    currentlyLiving,
  };

  // const handleUserInfoSave = async () => {
  //   try {
  //     const res = await axios.put(
  //       `/userDetail/update/${userDetailId}`,
  //       saveUserDetail
  //     );
  //     console.log(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <form className="editProfileInputCon">
      <div className="epiRow1">
        <ArrowBackIcon className="epiClearCon" />
        <span className="epiEditProfile">Edit Profile</span>
      </div>
      <hr className="epiHr1" />

      {/* {file ? (
          <img
            src={URL.createObjectURL(file)}
            className="fpcSelectedItemCon"
            alt=""
          />
        ) : (
          <img src="" className="fpcSelectedItemCon" alt="" />
        )} */}

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
        <ApartmentIcon className="userInfoEditIcon" />
        <input
          type="text"
          className="userInfoInput"
          placeholder="CompanyName"
          onChange={(e) => setFounderOf1(e.target.value)}
        />
      </div>

      <span className="userInfoInputConTitle">Founder of</span>
      <div className="userInfoInputCon">
        <ApartmentIcon className="userInfoEditIcon" />
        <input
          type="text"
          className="userInfoInput"
          placeholder="Company Name"
          onChange={(e) => setFounderOf2(e.target.value)}
        />
      </div>

      <span className="userInfoInputConTitle">Currently Studying</span>
      <div className="userInfoInputCon">
        <SchoolIcon className="userInfoEditIcon" />
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
        <SchoolIcon className="userInfoEditIcon" />
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
        <SchoolIcon className="userInfoEditIcon" />
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
        <SchoolIcon className="userInfoEditIcon" />
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

      <span className="userInfoInputConTitle">Address</span>
      <div className="userInfoInputCon">
        <LocationOnIcon className="userInfoEditIcon" />
        <input
          type="text"
          className="userInfoInput"
          placeholder="From"
          onChange={(e) => setFrom(e.target.value)}
        />
        <input
          type="text"
          className="userInfoInput"
          placeholder="Currently Living"
          onChange={(e) => setCurrentlyLiving(e.target.value)}
        />
      </div>

      <button className="save" type="submit">
        save
      </button>
    </form>
  );
}

export default EditProfile;
