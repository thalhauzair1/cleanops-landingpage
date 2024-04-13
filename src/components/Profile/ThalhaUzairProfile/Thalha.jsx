import React from "react";
import "./Thalha.css";
import ProfileImage from "../../profileImage/profileImage";
import jessicaImage from '../../../assets/landingpage-assets/Team-funny/Thalha.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faBehanceSquare } from '@fortawesome/free-brands-svg-icons'; // Import the specific icons you want to use

const Thalha = () => {
  return (
    <div className="profileContainer">
      <div className="profileImageContainer">
        <ProfileImage
          description="Advertising Graphic Designer and Marketing Coordinator with more than 25 years in the Finance field, now in UX / UI Designer role at Clean Ops."
          ProfileImage={jessicaImage}
        />
      </div>
      <div className="profileBottom">
          <h1>Thalha Uzair</h1>
          <h4>Full Stack Developer</h4>
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

export default Thalha;
