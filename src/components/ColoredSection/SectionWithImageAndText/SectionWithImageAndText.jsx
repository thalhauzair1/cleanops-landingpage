
import React from "react";
import "./SectionWithImageAndText.css";
import Button from '@mui/material/Button';
import image from "../../../assets/landingpage-assets/Mockup-03.png"

const SectionWithImageAndText = () => {

    return (

        <div className="section-with-image-and-text">
            <div className="section-with-image-and-text-container">
            <div className="section-with-image-and-text_text">
                    <h2>View Prototype</h2>
                    <Button variant="contained" style={{
                        backgroundColor: 'white',
                        color: 'black',
                        marginTop: '20px',
                        borderRadius: '10px',
                        fontWeight: '800',
                        fontSize: '16px',
                        textTransform: 'none',
                        width: '200px',
                    }}>View Figma Link</Button>
                </div>
                <div className="section-with-image-and-text_image">
                    <img src={image} alt="placeholder" />
                </div>
                
            </div>
        </div>
    );


}

export default SectionWithImageAndText;