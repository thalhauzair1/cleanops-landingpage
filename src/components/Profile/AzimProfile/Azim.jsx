import React from "react";
import "./Azim.css";
import ProfileImage from "../../profileImage/profileImage";
import jessicaImage from '../../../assets/landingpage-assets/Team-funny/azim.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faBehanceSquare } from '@fortawesome/free-brands-svg-icons'; // Import the specific icons you want to use

const Azim = () => {
  return (
    <div className="profileContainer">
      <div className="profileImageContainer">
        <ProfileImage
          description="Culminating 16 years of expertise in software, DevOps, and IT management, specializing in comprehensive solutions. Notably led database design, backend coding, and API security for Cleanops, showcasing versatility and dedication.
          "
          ProfileImage={jessicaImage}
        />
      </div>
      <div className="profileBottom">
          <h1>Azim Mohammadi</h1>
          <h4>Back End Developer</h4>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#0077B5" /> {/* Use the imported faLinkedin icon */}
            </a>
            <a
              href="https://www.behance.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faBehanceSquare} color="black" /> {/* Use the imported faBehance icon */}
            </a>
          </div>
      </div>
    </div>
  );
};

export default Azim;
