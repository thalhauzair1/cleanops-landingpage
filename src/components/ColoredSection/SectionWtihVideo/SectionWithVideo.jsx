import React from "react";
import "./SectionWithVideo.css";
import featureIcon from "../../../assets/landingpage-assets/Decoration/Broom.svg";

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
            <iframe
              src="https://www.youtube.com/embed/7e90gBu4pas"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWithVideo;
