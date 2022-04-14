import React from "react";
import "./online.css";

export default function online({ user }) {
  return (
    <li className="rightBarFriend">
      <div className="rightBarProfileImgContainer">
        <img className="rightBarProfileImg" src={user.profilePicture} alt="" />
        <span className="rightBarOnline"></span>
      </div>
      <span className="rightBarUsername">{user.username}</span>
    </li>
  );
}
