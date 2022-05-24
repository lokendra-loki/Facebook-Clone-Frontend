import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import BookIcon from "@mui/icons-material/Book";
import ClearIcon from "@mui/icons-material/Clear";
import "./deleteEditOpenCon.scss";

function DeleteEditOpenCon({ closeEditDeleteCon }) {
  return (
    <div className="deleteEditOpenContainer">
      <div className="deoClearCon" onClick={()=>closeEditDeleteCon(false)}>
        <ClearIcon className="deoClear" />
      </div>

      <hr className="deo1" />

      <div className="deocEdit">
        <EditIcon className="deocIcon" />
        <span className="deocTxt">Edit Post</span>
      </div>

      <hr className="deo1" />

      <div className="deocEdit">
        <DeleteIcon className="deocIcon" />
        <span className="deocTxt">Delete Post</span>
      </div>

      <hr className="deo1" />

      <div className="deocEdit">
        <BookIcon className="deocIcon" />
        <span className="deocTxt">Save Post</span>
      </div>
    </div>
  );
}

export default DeleteEditOpenCon;
