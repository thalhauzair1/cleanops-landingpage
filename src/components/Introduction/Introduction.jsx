import React from "react";
import "./Introduction.css";
import introductionLogo from "../../assets/landingpage-assets/02-Header/Logo-Desktop.svg";
import introductionPhoneImage from "../../assets/landingpage-assets/MobileBlurry.png";
import introductionPhoneImageMobile from "../../assets/landingpage-assets/phoneImageMobile.png";
import Button from "@mui/material/Button";
import BroomLogo from "../../assets/landingpage-assets/Decoration/Object-Mop.png"

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="introduction_Content">
        <div className="introduction_logo">
          <img src={introductionLogo} alt="logo" />
        </div>
        <div className="introduction_Bottom">
        <div className="contentImage" >
            <img className="phoneImagePc" src={introductionPhoneImage} alt="phone" />
            <img className="phoneImageMobile" src={introductionPhoneImageMobile} alt="phone" />
          </div>
          <div className="contentIntroduction">
            <h1>Revamp hotel housekeeping operation with Cleanops</h1>
            <p>
              Say goodbye to the hassle of traditional paperwork and welcome the
              era of digital housekeeping.
            </p>
            <Button variant="outlined" style={{
              backgroundColor: "white",
              border: '1px solid #F89C7B',
              borderWidth:'2px',
              color: "black",
              borderRadius: "20px",
              padding: "10px 20px",
              fontSize: "16px",
              fontWeight: "900",
              textTransform: "none",
              fontFamily: "Satoshi",
              maxWidth:"300px",
            
            }}>Download Presentation</Button>
          </div>
          <div className="broomLogo"> 
            <img src={BroomLogo} alt="broom" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Introduction;