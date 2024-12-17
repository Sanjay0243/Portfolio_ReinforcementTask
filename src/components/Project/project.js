import React from 'react';
import "./project.scss";

const Project = ({item}) => {
    
    return ( 
        <div className={`project ${item.type}`}>
    
                   <div className={item.classDiv}>
                            <img src={item.img} alt="" className={item.classDiv === "laptop" ? "laptopHard" : "phoneHard"} />
                        <div className={item.classimg1}>
                            <img src={item.screenImg} alt="" className={item.classimg2}/>
                        </div>
                    </div>

                    <div className="projectdetail">
                        <h1>{item.title}</h1>
                        <p className="ProjectDesc">{item.desc}</p>
                        <button className="projectButton">Learn More</button>
                    </div>

        </div>

     );
}
 
export default Project;