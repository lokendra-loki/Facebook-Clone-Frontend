import React, { useState } from "react";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import "./editProfile.scss";
import { useAPI1 } from "../../context/currentUserDetailContext";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const { currentUserDetail } = useAPI1();
  const navigate = useNavigate();

  //Edit Profile info
  const [bio, setBio] = useState(currentUserDetail.bio);
  const [currentJobPosition1, setCurrentJobPosition1] = useState(
    currentUserDetail.currentJobPosition1
  );
  const [currentJobCompany1, setCurrentJobCompany1] = useState(
    currentUserDetail.currentJobCompany1
  );
  const [currentJobPosition2, setCurrentJobPosition2] = useState(
    currentUserDetail.currentJobPosition2
  );
  const [currentJobCompany2, setCurrentJobCompany2] = useState(
    currentUserDetail.currentJobCompany2
  );
  const [founderOf1, setFounderOf1] = useState(currentUserDetail.founderOf1);
  const [founderOf2, setFounderOf2] = useState(currentUserDetail.founderOf2);
  const [currentStudyingCourse, setCurrentStudyingCourse] = useState(
    currentUserDetail.currentStudyingCourse
  );
  const [currentStudyingUniversity, setCurrentStudyingUniversity] = useState(
    currentUserDetail.currentStudyingUniversity
  );
  const [graduatedCourse, setGraduatedCourse] = useState(
    currentUserDetail.graduatedCourse
  );
  const [graduatedUniversity, setGraduatedUniversity] = useState(
    currentUserDetail.graduatedUniversity
  );
  const [plus2CompletedCollege, setPlus2CompletedCollege] = useState(
    currentUserDetail.plus2CompletedCollege
  );
  const [plus2CompletedCollegeLocation, setPlus2CompletedCollegeLocation] =
    useState(currentUserDetail.plus2CompletedCollegeLocation);

  const [from, setFrom] = useState(currentUserDetail.from);
  const [currentlyLiving, setCurrentlyLiving] = useState(
    currentUserDetail.currentlyLiving
  );

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
    from,
    currentlyLiving,
    bio,
  };

  //Update
  const handleUserInfoSave = async () => {
    try {
      await axios.put(
        `/userDetail/update/${currentUserDetail._id}`,
        saveUserDetail
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="editProfileInputCon" onSubmit={handleUserInfoSave}>
      <div className="epiRow1">
        <ArrowBackIcon className="epiClearCon" onClick={() => navigate(-1)} />
        <span className="epiEditProfile">Edit Profile</span>
      </div>
      <hr className="epiHr1" />

      <span className="epiBio">Bio</span>
      <textarea
        className="epiBioInput"
        placeholder="Write your Bio here"
        onChange={(e) => setBio(e.target.value)}
        defaultValue={currentUserDetail.bio}
      />

      {/* User information input ==============================*/}
      <span className="userInfoInputConTitle">Currently Working</span>
      <div className="userInfoInputCon">
        <BusinessCenterIcon className="userInfoEditIcon" />
        <input
          type="text"
          className="userInfoInput"
          placeholder="Position"
          onChange={(e) => setCurrentJobPosition1(e.target.value)}
          defaultValue={currentUserDetail.currentJobPosition1}
        />
        <input
          type="text"
          className="userInfoInput"
          placeholder="company Name"
          onChange={(e) => setCurrentJobCompany1(e.target.value)}
          defaultValue={currentUserDetail.currentJobCompany1}
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
          defaultValue={currentUserDetail.currentJobPosition2}
        />
        <input
          type="text"
          className="userInfoInput"
          placeholder="company Name"
          onChange={(e) => setCurrentJobCompany2(e.target.value)}
          defaultValue={currentUserDetail.currentJobCompany2}
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
          defaultValue={currentUserDetail.founderOf1}
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
          defaultValue={currentUserDetail.founderOf2}
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
          defaultValue={currentUserDetail.currentStudyingCourse}
        />
        <input
          type="text"
          className="userInfoInput"
          placeholder="College/School"
          onChange={(e) => setCurrentStudyingUniversity(e.target.value)}
          defaultValue={currentUserDetail.currentStudyingUniversity}
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
          defaultValue={currentUserDetail.graduatedCourse}
        />
        <input
          type="text"
          className="userInfoInput"
          placeholder="College"
          onChange={(e) => setGraduatedUniversity(e.target.value)}
          defaultValue={currentUserDetail.graduatedUniversity}
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
          defaultValue={currentUserDetail.plus2CompletedCollege}
        />
        <input
          type="text"
          className="userInfoInput"
          placeholder="Address"
          onChange={(e) => setPlus2CompletedCollegeLocation(e.target.value)}
          defaultValue={currentUserDetail.plus2CompletedCollegeLocation}
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
          defaultValue={currentUserDetail.from}
        />
        <input
          type="text"
          className="userInfoInput"
          placeholder="Currently Living"
          onChange={(e) => setCurrentlyLiving(e.target.value)}
          defaultValue={currentUserDetail.currentlyLiving}
        />
      </div>

      <button className="save" type="submit">
        save
      </button>
    </form>
  );
}

export default EditProfile;
