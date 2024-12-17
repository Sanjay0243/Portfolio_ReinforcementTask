import React from 'react';
import "./footer.scss";

const Footer = () => {
    return ( 

    <div className="footer">

        <div className="fbox">
            <p style={{color:"orangered", fontSize:"32px", marginBottom:"0px"}}>
            Flex.
            </p>
            <p style={{color:"white", fontSize:"18px", lineHeight:"1.8"}}> 
            Flex. is a modern and stylish digital agency HTML template. 
            Designed for creative designers, agencies, freelancers, photographers, 
            or any creative profession. It is fully responsive, making it pixel sharp on any device. 
            It has an animating stats section, working contact form, stylish portfolio section, 
            and other features you will only find on premium HTML templates. Built with clean 
            and organized code, this template is very easy to customize.
            </p>
        </div>
    
        <div className="fbox">
            <p style={{color:"white",fontSize: "28px",marginBottom:"0px"}}>
            <strong>Get Notified</strong> 
            </p>
             <p style={{color:"white",fontSize:"18px",lineHeight:"1.8"}}>
            Send us a meesage or just say hello in the above contact form to 
            know more about our services, pricing and to subscribe to our newsletter to 
            get updates fro Flex Develpoment.
            </p>
        </div>
    
        <div className="fbox3">
            <p>© Copyright Flex. 2022</p>
            <p>Site Template by 
                <a href="/#">Flex.</a>
            </p>
        </div>
    </div>
     );
}
 
export default Footer;