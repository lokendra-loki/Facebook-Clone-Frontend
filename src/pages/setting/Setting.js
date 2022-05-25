import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Feed from "../../components/feed/Feed";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import "./setting.scss";

function Setting() {
  //To open userCredential edit container
  const [openUserCredentialEditCon, setOpenUserCredentialEditCon] =
    useState(false);

  //
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  console.log(path);

  //update userCredentials
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(username, email, password);

  const updateThis = {
    username,
    email,
    password,
  };

  const handleUpdateUserCredentialSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/users/update/${path}`, updateThis);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Topbar />
      <div className="userSettingInfoCon">
        <div className="usiLeft">
          <Leftbar />
        </div>
        <div className="useRight">
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
              <span className="usiItemTitleValue">Loki chaulagain</span>
            </div>
            <hr className="suiHr2" />

            <div className="usiItemCon">
              <span className="usiItemTitle">Email</span>
              <span className="usiItemTitleValue">lokendra@gmail.com</span>
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
            <form
              className="userCredentialEditForm"
              onSubmit={handleUpdateUserCredentialSubmit}
            >
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
