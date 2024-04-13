// ProfileImage.js
import React from "react";
import "./profileImage.css";

const ProfileImage = ({ ProfileImage, description, name }) => {
  return (
    <div className="profile-image">
      <figure className="image-container">
        <img src={ProfileImage} alt="placeholder" className="image" />
        <figcaption className="image-text">{description}</figcaption>
      </figure>
    </div>
  );
};

export default ProfileImage;
