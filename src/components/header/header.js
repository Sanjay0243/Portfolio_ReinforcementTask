import React from 'react';
import "./head.scss";

const Head = () => {
    return ( 
        <div className="head">

            <div className="animationType">
                <h1>We Create your Website</h1>

                <p>We are experienced developers with previous job experinece in web Development. </p>

                <div className="buttonContainer">
                    <a href="#contact">Create Project</a>
                    <a href="#about" className="aboutButton">About Us</a>
                </div>
            </div>
        </div>    
     );
}
 
export default Head;