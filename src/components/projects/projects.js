import React from 'react';
import './projects.scss';
import {MoodMateLogo, TagWithMeLogo, TwitchStitchLogo, SeekdLogo, MyPremierLeagueLogo} from "../../images";
import {Link} from "react-router-dom";


const Project = (props) => {
    return(
        <div className="app">
            <img src={props.projectLogo} alt="" className="appLogo"/>
            <div className="info">
                <div className="desc">
                    {props.projectName}
                </div>
                <Link className="learn" to={`/${props.projectName}`}>Learn More</Link>
            </div>
        </div>
    )
}


const Projects = () => {
    return(
        <div className="portfolio">
            <div className="title">
                <h1>Portfolio</h1>
            </div>
            <div className="underline" ></div>        
            <div className="content">
                <Project projectLogo={SeekdLogo} projectName='Seekd'/>
                <Project projectLogo={MyPremierLeagueLogo} projectName='MyPremierLeague'/>
                <Project projectLogo={TagWithMeLogo} projectName='TagWithMe'/>
                <Project projectLogo={TwitchStitchLogo} projectName='TwitchStitch'/>
                <Project projectLogo={MoodMateLogo} projectName='MoodMate'/>
                
            </div>
        </div> 
    )
}

export default Projects;