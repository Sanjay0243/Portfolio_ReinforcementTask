import Project from '..project/Project/project';
import "./projects.scss";
import {Data} from '../../projectData';

const Projects = () => {

    return ( 
        <div id="projectsMain">
            <div className="colContainer">
                <div className="col1">
                    <p className="headingp1">OUR PROJECTS</p>
                    <h4>WORKING PROCESS</h4>
                    <p className="headingp2">LASTET WORKING PROJECT</p>
                </div>
                <div className='col2'>
                    <p className="headingp3">
                        Create your UI/UX designs / Backend development with Flex Dev at lowest cost
                         in accordance with the fastest timeframe. Enjoy our free 7 days trial 
                         offer to test our technology. (NO CREDIT CARD REQUIRED)
                    </p>
                </div>
            </div>

            <div className="projects">
                {Data.map((item)=>(
                    <Project key={item.id} item={item} /> 
                ))};
               
            </div>
           

        </div>
     );
}
 
export default Projects;