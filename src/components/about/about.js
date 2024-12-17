import React, { useState } from 'react';
import "./about.scss";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


const About = () => {

    const [visible, setVisible] = useState();

    const onEnterViewport = ()=>{
setVisible(true);
    };

    const onExitViewport = ()=>{
        setVisible(false);
            };

    return ( 
        <div id="about">
            <h2>Hello There</h2>
            <p className="p1">We are Flex. Development</p>

            <p className="p2">
              Flex. is a modern and stylish digital agency HTML template. Designed for creative designers, agencies, 
              freelancers, photographers, or any creative profession. It is fully responsive, making it pixel sharp on any device. 
              It has an animating stats section, working contact form, stylish portfolio section,
               and other features you will only find on premium HTML templates.
              Built with clean and organized code, this template is very easy to customize.
            </p>
            <ScrollTrigger
             className="counters"
             onEnter={onEnterViewport} 
             onExit={onExitViewport}
             >
                <div className="mainDiv">
                    <div className="counter">
                  {visible && <CountUp end={10} duration={0.8} />}
                    +
                    </div>
                    <p>Projects</p>
                </div>

                <div className="mainDiv">
                    <div className="counter">
                    {visible &&<CountUp end={100} duration={0.8} />}
                    +
                    </div>
                    <p>Customers</p>
                </div>

                <div className="mainDiv">
                    <div className="counter">
                    {visible && <CountUp end={15} duration={0.8} />}
                    +
                    </div>
                    <p>Team</p>
                </div>

                <div className="mainDiv">
                    <div className="counter">
                    {visible && <CountUp end={100} duration={0.8} />}
                    +
                    </div>
                    <p>HTML</p>
                </div>
            </ScrollTrigger>
        </div>
     );
}
 
export default About;