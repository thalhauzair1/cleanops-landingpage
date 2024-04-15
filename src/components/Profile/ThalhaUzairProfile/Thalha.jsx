import React from "react";
import "./Thalha.css";
import ProfileImage from "../../profileImage/profileImage";
import jessicaImage from '../../../assets/landingpage-assets/Team-funny/Thalha.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faBehanceSquare, faGithub } from '@fortawesome/free-brands-svg-icons'; // Import the specific icons you want to use

const Thalha = () => {
  return (
    <div className="profileContainer">
      <div className="profileImageContainer">
        <ProfileImage
          description="Bringing two years of experience from Capgemini, this developer dives into the CleanOps project, offering their expertise as a full-stack contributor. Passionate about problem-solving, they're dedicated to ensuring CleanOps
           functions seamlessly and efficiently, making valuable contributions at every turn."
          ProfileImage={jessicaImage}
        />
      </div>
      <div className="profileBottom">
          <h1>Thalha Uzair</h1>
          <h4>Full Stack Developer</h4>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/thalha-uzair/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#0077B5" /> {/* Use the imported faLinkedin icon */}
            </a>
            <a
              href="https://github.com/thalhauzair1"
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

export default Thalha;
