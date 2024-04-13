import React from "react";
import "./SecondSection.css";
import SectionWithVideo from "../ColoredSection/SectionWtihVideo/SectionWithVideo";
import image from "../../assets/landingpage-assets/HK-01.png";
import sparkleImage from "../../assets/landingpage-assets/Decoration/Sparkles.svg";

const SecondSection = () => {
  return (
    <div className="second-section">
      <div className="sparkleImages">
        <div className="sparkleImage1">
          <img src={sparkleImage} />
        </div>
        <div className="sparkleImage2">
          <img src={sparkleImage} />
        </div>
        <div className="sparkleImage3">
          <img src={sparkleImage} />
        </div>
      </div>
      <div className="second-sectionHeader">
        <div className="second-sectionImage">
          <img src={image} />
        </div>
        <div className="second-sectionContent">
          <h1>Streamline your workflow</h1>
          <p>
            Our mobile app provides a user-friendly interface for effectively
            managing housekeeping operations. Our main goal to help streamline
            day-to-day tasks, enhance communication.
          </p>
        </div>
      </div>
      {/* <div>
            <SectionWithVideo />
        </div> */}
    </div>
  );
};

export default SecondSection;
