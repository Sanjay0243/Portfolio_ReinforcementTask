import React, { useEffect, useState } from 'react';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Head from '../../components/Head/Head';
import Navbar from '../../components/Navbar/Navbar';
import Projects from '../../components/Projects/Projects';
import './home.scss';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';




const Home = () => {
const [show, setShow] = useState(false);

const gotToTop = () => {
window.scrollTo({
    top:0,
});
};

useEffect(()=>{
window.addEventListener('scroll',()=>{
    if(window.scrollY>400){
        setShow(true);
    }else{
        setShow(false); 
    }
})
});

    return ( 
        <div className="home">
           <Navbar/>
            <div className="homeContainer">
                { show &&
                <button className="backToTopBttn" onClick={gotToTop}>
                    <KeyboardDoubleArrowUpIcon style={{fontSize:"32px"}}/>
                </button>
                }
                <Head/>
                <About/>
                <Projects/>
                <Contact/>
                <Footer/>
            </div>
        </div>
     );
}

 
export default Home;