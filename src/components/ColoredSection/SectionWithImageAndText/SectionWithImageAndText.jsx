
import React from "react";
import "./SectionWithImageAndText.css";
import Button from '@mui/material/Button';
import image from "../../../assets/landingpage-assets/Mockup-03.png"

const SectionWithImageAndText = () => {
    const gotoFigma = () => {
        window.open('https://www.figma.com/file/9bySAqecD164prZsKkXa1Z/For-Submisson?type=design&node-id=451%3A2&mode=design&t=F3GRsLxCcbg5XCrc-1' );
    }


    return (

        <div className="section-with-image-and-text">
            <div className="section-with-image-and-text-container">
            <div className="section-with-image-and-text_text">
                    <h2>View Prototype</h2>
                    <Button variant="contained" 
                    onClick={gotoFigma}
                    style={{
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