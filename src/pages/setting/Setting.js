import axios from "axios";
import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Leftbar from "../../components/leftbar/Leftbar";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Topbar from "../../components/topbar/Topbar";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./setting.scss";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { useAPI } from "../../context/currentUserContext";
import EditProfile from "../../components/editProfileInfo/EditProfile";

function Setting() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const { user } = useContext(AuthContext);
  const { currentUser } = useAPI();

  //Open edit container
  const [openUserCredentialEditCon, setOpenUserCredentialEditCon] =
    useState(false);

  //Update
  const [username, setUsername] = useState(currentUser.username);
  const [email, setEmail] = useState(currentUser.email);
  const [password, setPassword] = useState("");

  const updateThis = {
    username,
    email,
    password,
  };

  const update = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/users/update/${path}`, updateThis);
      // localStorage.setItem("user", JSON.stringify(res.data));
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const [file1, setFile1] = useState(null);
  const [uploading1, setUploading1] = useState(false);
  const [uploading2, setUploading2] = useState(false);
  const [success1, setSuccess1] = useState(false);
  const [success2, setSuccess2] = useState(false);

  const handleSubmit1 = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file1?.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file1);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploading1(true);
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          try {
            const res = axios.put(`/users/update/${user._id}`, {
              profilePic: downloadURL,
            });

            setSuccess1(true);
            console.log(res.data);
            window.location.reload();
          } catch (error) {
            console.log(error);
          }
        });
      }
    );
  };

  //Cover Picture
  const [file2, setFile2] = useState(null);

  const handleSubmit2 = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file2?.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file2);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploading2(true);
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          try {
            const res = axios.put(`/users/update/${user._id}`, {
              coverPic: downloadURL,
            });

            setSuccess2(true);
            console.log(res.data);
            window.location.reload();
          } catch (error) {
            console.log(error);
          }
        });
      }
    );
  };

  return (
    <>
      <Topbar />
      <div className="userSettingInfoCon">
        <div className="usiLeft">
          <Leftbar />
        </div>
        <div className="useRight">
          <div className="profileCoverPicDiv">
            <span className="uploadPP">Profile Picture</span>
            <form>
              <div className="profileDiv">
                <label htmlFor="file1" className="shareOptionLabel">
                  <input
                    style={{ display: "none" }}
                    type="file"
                    id="file1"
                    accept=".png,.jpeg.jpg"
                    onChange={(e) => setFile1(e.target.files[0])}
                  />
                  <AddPhotoAlternateIcon className="ppIcon" />
                </label>
                {file1 ? (
                  <img
                    src={URL.createObjectURL(file1)}
                    alt=""
                    className="uploadProfilePic"
                  />
                ) : (
                  <img
                    src={currentUser.profilePic}
                    alt=""
                    className="uploadProfilePic"
                  />
                )}
              </div>
              <button className="profilePicChange" onClick={handleSubmit1}>
                {uploading1 ? " Saving..." : " Save"}
              </button>
              {success1 && <span className="ppsuccess">Success</span>}
            </form>
            {/* Cover Picture */}
            <span className="uploadcP">Cover Picture</span>
            <form onSubmit={handleSubmit2}>
              <div className="coverDiv">
                <label htmlFor="file2" className="shareOptionLabel2">
                  <input
                    style={{ display: "none" }}
                    type="file"
                    id="file2"
                    accept=".png,.jpeg.jpg"
                    onChange={(e) => setFile2(e.target.files[0])}
                  />
                  <AddPhotoAlternateIcon className="cpIcon" />
                </label>
                {file2 ? (
                  <img
                    src={URL.createObjectURL(file2)}
                    alt=""
                    className="uploadCoverPic"
                  />
                ) : (
                  <img
                    src={currentUser.coverPic}
                    alt=""
                    className="uploadCoverPic"
                  />
                )}
              </div>
              <button className="coverPicChange" type="submit">
                {uploading2 ? " Saving..." : " Save"}
              </button>
              {success2 && <span className="cpsuccess">Success</span>}
            </form>
          </div>

          {/* --------------------------------- */}
          <div className="userCredentialEditCon">
            <div className="usiRow1">
              <span className="usiTitle">General Account Setting</span>
              <button
                className="usiEditBut"
                onClick={() =>
                  setOpenUserCredentialEditCon(!openUserCredentialEditCon)
                }
              >
                Edit
              </button>
            </div>

            <hr className="suiHr1" />
            <div className="usiItemCon">
              <span className="usiItemTitle">Username</span>
              <span className="usiItemTitleValue">{currentUser?.username}</span>
            </div>
            <hr className="suiHr2" />

            <div className="usiItemCon">
              <span className="usiItemTitle">Email</span>
              <span className="usiItemTitleValue">{currentUser?.email}</span>
            </div>
            <hr className="suiHr2" />

            <div className="usiItemCon">
              <span className="usiItemTitle">Password</span>
              <span className="usiItemTitleValue">*************</span>
            </div>
            <hr className="suiHr1" />
          </div>
          {/* --------------------------------- */}

          {/* User Credential Edit Mode Container */}
          {openUserCredentialEditCon && (
            <form className="userCredentialEditForm" onSubmit={update}>
              <div className="userCredentialEditModeCon">
                <div className="ucemcRow1">
                  <span className="ucemcTitle">Change Account Credentials</span>
                  <button
                    className="ucemcCancelBut"
                    onClick={() => setOpenUserCredentialEditCon(false)}
                  >
                    Cancel
                  </button>
                </div>

                <hr className="ucemcHr1" />
                <div className="ucemcItemCon">
                  <span className="ucemcItemTitle">Username</span>
                  <input
                    type="text"
                    className="ucemcItemTitleValueInput"
                    placeholder="New Username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <hr className="ucemcHr2" />

                <div className="ucemcItemCon">
                  <span className="ucemcItemTitle">Email</span>
                  <input
                    type="text"
                    className="ucemcItemTitleValueInput"
                    placeholder="New Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <hr className="ucemcHr2" />

                <div className="ucemcItemCon">
                  <span className="ucemcItemTitle">Password</span>
                  <input
                    type="text"
                    className="ucemcItemTitleValueInput"
                    placeholder="New Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <hr className="ucemcHr1" />
                <button className="ucemcSaveBut" type="submit">
                  Save
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default Setting;
