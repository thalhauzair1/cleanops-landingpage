import React
 from "react";
import "./SectionWithImage.css";
import mobileImage1 from "../../../assets/landingpage-assets/coloredPhone1.png";
import mobileImage2 from "../../../assets/landingpage-assets/coloredPhone2.png";

const SectionWithImage = () => {
    return(
        <div className="sectionWithImage">
            <div className="SectionContainerWithImage">
                <div className="imagesInSection">
                    <img src={mobileImage1} alt="mobileImage" />
                    <img src={mobileImage2} alt="mobileImage" />
                </div>

            </div>
        </div>
    )

}


export default SectionWithImage;