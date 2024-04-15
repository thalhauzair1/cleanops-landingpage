import React from "react";
import "./Jump.css";
import ProfileImage from "../../profileImage/profileImage";
import JumpImage from "../../../assets/landingpage-assets/Team-funny/Jump.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faBehanceSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLink
}
from "@fortawesome/free-solid-svg-icons"


const Jump = () => {
  return (
    <div className="profileContainer">
      <div className="profileImageContainer">
        <ProfileImage
          description="With three years of experience in the UX/UI field and previous work in digital marketing, he brings a wealth of expertise to leading Cleanops' design team tasks in UX research, the design process, and branding."
          ProfileImage={JumpImage}
        />
      </div>
      <div className="profileBottom">
        <h1>Kanin Phuvanat (Jump)</h1>
        <h4>Lead Product Designer</h4>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/jumpchill/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#0077B5" />{" "}
            {/* Use the imported faLinkedin icon */}
          </a>
          <a
            href="https://www.behance.net/JumpChill"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faBehanceSquare} color="black" />{" "}
            {/* Use the imported faBehance icon */}
          </a>
          <a
            href="https://jumpcreativespace.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLink} color="black"/>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jump;
