import React from "react";
import SectionWithImage from "../ColoredSection/SectionWithImage/SectionWithImage";
import featureIcon from "../../assets/landingpage-assets/Icons/HK-01.svg";
import FeatureComponent from "../FeatureComponent/FeatureComponent";
import "./FeatureSection.css";
import SectionWithVideo from "../ColoredSection/SectionWtihVideo/SectionWithVideo";
import SectionWithImageAndText from "../ColoredSection/SectionWithImageAndText/SectionWithImageAndText";


const FeatureSection = () => {
    return(
        <div className="featureSection">
               <div className="videoSectionInFeature">
                   <SectionWithVideo />
               </div>
                <h1>Features</h1>
                <div className="featureSectionContent">
                <div className="features">
                    <FeatureComponent featureTitle="Daily Task Dashboard" featureDescription="Track and filter tasks, and notify the team when complete. " featureIcon={featureIcon}/>
                    <FeatureComponent featureTitle="Request Center" featureDescription="Order items for rooms or carts to the hotel runners or request for assistance." featureIcon={featureIcon}/>
                    <FeatureComponent featureTitle="Performance Tracker" featureDescription="Promotes department transparency, tracks staff shifts and preventing over-workloads." featureIcon={featureIcon}/>
                </div>
                <div className="featuresMiddleSection">
                    <SectionWithImage />
                </div>
                <div className="featuresBottomSection">
                <FeatureComponent featureTitle="Room monitoring" featureDescription="Oversee daily cleaning operation & conduct virtual inspections.  " featureIcon={featureIcon}/>
                 <FeatureComponent featureTitle="Performance Tracker" featureDescription="Manage, accept or decline requests from the housekeepers." featureIcon={featureIcon}/>
                </div>

                <div className="featureBottomEndSection">
                    <SectionWithImageAndText />
                </div>
                </div>
            </div>

    )


}

export default FeatureSection;