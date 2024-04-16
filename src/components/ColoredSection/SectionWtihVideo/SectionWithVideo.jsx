import React from "react";
import "./SectionWithVideo.css";
import featureIcon from "../../../assets/landingpage-assets/Decoration/Broom.svg";
import video from "../../../assets/landingpage-assets/Video/CleanOps_final_video.mp4";

const SectionWithVideo = ({ sectionColor }) => {
  return (
    <div className="coloredSectionContainer">
      <div className="coloredSectionWithVideo">
        <div className="coloredSection_Content">
          <div className="coloredSection_top">
            <div className="coloredSection_topHead">
              <h1>Streamline your workflow</h1>
              <img src={featureIcon} alt="icon" />
            </div>
            <p>
              Our mobile app provides a user-friendly interface for effectively
              managing housekeeping operations. Our main goal to help streamline
              day-to-day tasks, enhance communication.
            </p>
          </div>
          <div className="coloredSection_video">
            <video controls autoplay muted>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWithVideo;
