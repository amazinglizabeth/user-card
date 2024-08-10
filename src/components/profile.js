import React from "react";
import ProfilePic from "../assets/images/profilePics.jpg";
import { FaCheckSquare } from "react-icons/fa";

export default function Profile() {
  return (
    <div div className="profile">
      <img src={ProfilePic} alt="profile-pics" />
      <h3>
        Amazing Lizabeth
        <span className="check">
          <FaCheckSquare />
        </span>
      </h3>
      <p>Junior Front-End Developer, Nigeria.</p>
    </div>
  );
}
