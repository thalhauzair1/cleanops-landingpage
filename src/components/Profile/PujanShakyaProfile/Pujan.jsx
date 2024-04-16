import React from "react";
import "./Pujan.css";
import ProfileImage from "../../profileImage/profileImage";
import PujanImage from '../../../assets/landingpage-assets/Team-funny/Pujan.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faBehanceSquare, faGithub } from '@fortawesome/free-brands-svg-icons'; // Import the specific icons you want to use

const Pujan = () => {
  return (
    <div className="profileContainer">
      <div className="profileImageContainer">
        <ProfileImage
          description="With about 4 years of experience as a Software Engineer at Cotiviti, a US-based Healthcare Analytics Company, he is seasoned in the tech realm. For Cleanops , he handles front-end development using React Native and back-end using node Express and SQL Server"
          ProfileImage={PujanImage}
        />
      </div>
      <div className="profileBottom">
          <h1>Pujan Shakya</h1>
          <h4>Full Stack Developer</h4>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/pujan-shakya/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#0077B5" /> {/* Use the imported faLinkedin icon */}
            </a>
            <a
              href="https://github.com/puzannshakya"
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

export default Pujan;
