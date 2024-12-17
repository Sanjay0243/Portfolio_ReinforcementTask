import React, { useState } from 'react';
import './navbar.scss';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    
const[show, setShow] = useState(false);

    return ( 
        <div id='navbar'>

            <div className="navLogo">
                <p>
                Flex.
                 <sub className="white">Development</sub>
                </p>
            </div>

            <div className="navContent">
                <a href="#about"> About</a>
                <a href="#contact">Contact Us</a>
                <a href="#projectsMain">Projects</a>
            </div>
            
            <div className="iconContainer" onClick={()=>setShow(!show)}>
                { show ? <CloseIcon className="iconNav"/> :
                <MenuIcon className="iconNav"/>
                }
            </div>
        {show &&
            <div className="navbarMobile">
                <a href="#about">About</a>
                <a  href="#contact">Contact Us</a>
                <a  href="#projectsMain">Projects</a>
            </div>
        }
        
        </div>

     );
}
 
export default Navbar;