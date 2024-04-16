import React from "react";
import "./Cylvia.css";
import ProfileImage from "../../profileImage/profileImage";
import cylviaImage from '../../../assets/landingpage-assets/Team-funny/Cylvia.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faBehanceSquare, faGithub } from '@fortawesome/free-brands-svg-icons'; // Import the specific icons you want to use

const Cylvia = () => {
  return (
    <div className="profileContainer">
      <div className="profileImageContainer">
        <ProfileImage
          description="Drawing from her previous digital business experience, she assumed the role of project manager at CleanOps while developing her skills as a React Native front-end developer."
          ProfileImage={cylviaImage}
        />
      </div>
      <div className="profileBottom">
          <h1>Cylvia Lian</h1>
          <h4>Front End Developer</h4>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/cylvialian/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#0077B5" /> {/* Use the imported faLinkedin icon */}
            </a>
            <a
              href="https://github.com/cylvito"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} color="black" /> {/* Use the imported faBehance icon */}
            </a>
          </div>
      </div>
    </div>
  );
};

export default Cylvia;
