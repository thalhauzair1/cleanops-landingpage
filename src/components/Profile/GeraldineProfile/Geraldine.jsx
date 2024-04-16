import React from "react";
import "./Geraldine.css";
import ProfileImage from "../../profileImage/profileImage";
import geraldineImage from '../../../assets/landingpage-assets/Team-funny/geraldine.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faBehanceSquare } from '@fortawesome/free-brands-svg-icons'; // Import the specific icons you want to use

const Geraldine = () => {
  return (
    <div className="profileContainer">
      <div className="profileImageContainer">
        <ProfileImage
          description="Industrial Designer with 1 year of experience as a User experience coordinator with knowledge in digital Marketing and digital business, for CleanOps she is UX/UI Designer"
          ProfileImage={geraldineImage}
        />
      </div>
      <div className="profileBottom">
          <h1>Geraldine Succar</h1>
          <h4>Product Designer</h4>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/geraldinesuccar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#0077B5" /> {/* Use the imported faLinkedin icon */}
            </a>
            <a
              href="https://www.behance.net/geraldinedesign"
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

export default Geraldine;
