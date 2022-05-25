import React from "react";
import Feed from "../../components/feed/Feed";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import "./setting.scss";

function Setting() {
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
              <button className="usiEditBut">Edit</button>
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
          <div className="userCredentialEditModeCon">
            <div className="ucemcRow1">
              <span className="ucemcTitle">Change Account Credentials</span>
              {/* <button className="ucemcEditBut">Edit</button> */}
            </div>

            <hr className="ucemcHr1" />
            <div className="ucemcItemCon">
              <span className="ucemcItemTitle">Username</span>
              <input
                type="text"
                className="ucemcItemTitleValueInput"
                placeholder="New Username"
              />
            </div>
            <hr className="ucemcHr2" />

            <div className="ucemcItemCon">
              <span className="ucemcItemTitle">Email</span>
              <input
                type="text"
                className="ucemcItemTitleValueInput"
                placeholder="New Email"
              />
            </div>
            <hr className="ucemcHr2" />

            <div className="ucemcItemCon">
              <span className="ucemcItemTitle">Password</span>
              <input
                type="text"
                className="ucemcItemTitleValueInput"
                placeholder="New Password"
              />
            </div>
            <hr className="ucemcHr1" />
            <button className="ucemcSaveBut">Save</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Setting;
