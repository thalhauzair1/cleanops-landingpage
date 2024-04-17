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
              <h1>Digital Housekeeping</h1>
              <img src={featureIcon} alt="icon" />
            </div>
            <p>
            Our goal is to streamline workflow and enhance communication for housekeepers. While the management team can easily track and inspect the daily cleaning.
            </p>
          </div>
          <div className="coloredSection_video">
            <video controls muted>
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
