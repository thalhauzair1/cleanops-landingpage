import React from "react";
import JessicaProfile from "../Profile/JessicaProfile/JessicaProfile";
import "./MeetMyTeamSection.css";
import Pujan from "../Profile/PujanShakyaProfile/Pujan";
import Cylvia from "../Profile/CylviaProfile/Cylvia";
import Thalha from "../Profile/ThalhaUzairProfile/Thalha";
import Azim from "../Profile/AzimProfile/Azim";
import Geraldine from "../Profile/GeraldineProfile/Geraldine";
import Jump from "../Profile/Jump/Jump";
import SparkleImage from "../../assets/landingpage-assets/Decoration/Vector.png";

const MeetMyTeamSection = () => {
  return (
    <div className="meetMyTeamSection" id="our-team">
      <div className="meetMyTeamheader">
        <img src={SparkleImage} alt="sparkle" />
        <h2>Meet Team Nova</h2>
        <img src={SparkleImage} alt="sparkle" />
      </div>

      
      <div className="teamMembers">
        <Pujan />
        <Cylvia />
        <Thalha />
        <Azim />
        <Jump />
        <Geraldine />
        <JessicaProfile />
      </div>
    </div>
  );
};

export default MeetMyTeamSection;
