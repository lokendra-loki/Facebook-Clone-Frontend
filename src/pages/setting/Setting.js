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
        <div className="useRight">ueiuhiuefdnkdfsbn</div>
      </div>
    </>
  );
}

export default Setting;
