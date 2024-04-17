import React from "react";
import SectionWithImage from "../ColoredSection/SectionWithImage/SectionWithImage";
import featureIcon from "../../assets/landingpage-assets/Icons/HK-01.svg";
import RequestCenter from "../../assets/landingpage-assets/Icons/HK-02.svg";
import PerformanceTracker from "../../assets/landingpage-assets/Icons/HK-03.svg";
import RoomMonitoring from "../../assets/landingpage-assets/Icons/Sup-01.svg";
import RequestManagement from "../../assets/landingpage-assets/Icons/Sup-02.svg"
import FeatureComponent from "../FeatureComponent/FeatureComponent";
import "./FeatureSection.css";
import SectionWithVideo from "../ColoredSection/SectionWtihVideo/SectionWithVideo";
import SectionWithImageAndText from "../ColoredSection/SectionWithImageAndText/SectionWithImageAndText";


const FeatureSection = () => {
    return(
        <div className="featureSection" id="feature-Section">
               <div className="videoSectionInFeature">
                   <SectionWithVideo />
               </div>
                <h1>Features</h1>
                <div className="featureSectionContent">
                <div className="features">
                    <FeatureComponent featureTitle="Daily Task Dashboard" featureDescription="Track and filter tasks, and notify the team when complete. " featureIcon={featureIcon}/>
                    <FeatureComponent featureTitle="Request Center" featureDescription="Order items for rooms or carts to the hotel runners or request for assistance." featureIcon={RequestCenter}/>
                    <FeatureComponent featureTitle="Performance Tracker" featureDescription="Promotes department transparency, tracks staff shifts and preventing over-workloads." featureIcon={PerformanceTracker}/>
                </div>
                <div className="featuresMiddleSection">
                    <SectionWithImage />
                </div>
                <div className="featuresBottomSection">
                <FeatureComponent featureTitle="Room monitoring" featureDescription="Oversee daily cleaning operation & conduct virtual inspections.  " featureIcon={RoomMonitoring}/>
                 <FeatureComponent featureTitle="Request Management" featureDescription="Manage, accept or decline requests from the housekeepers." featureIcon={RequestManagement}/>
                </div>

                <div className="featureBottomEndSection">
                    <SectionWithImageAndText />
                </div>
                </div>
            </div>

    )


}

export default FeatureSection;