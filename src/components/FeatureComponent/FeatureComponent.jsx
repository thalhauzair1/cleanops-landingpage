import React from 'react';
import "./FeatureComponent.css";

const FeatureComponent = ({featureTitle,featureDescription,featureIcon}) => {
    return (
        <div className="featureComponent">
            <div className="featureComponent_Content">
                <div className="featureComponent_icon">
                    <img src={featureIcon} alt="icon" />
                </div>
                <div className="featureComponent_Bottom">
                    <h3>{ featureTitle}</h3>
                    <p>{featureDescription}</p>
                </div>
            </div>
        </div>
    );
    }
    export default FeatureComponent;