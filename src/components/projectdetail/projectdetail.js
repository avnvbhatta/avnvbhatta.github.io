import React, { useEffect } from 'react';
import './projectdetail.scss';
import {MoodMateLogo, TagWithMeGif, TagWithMeLogo, TwitchStitchGif, TwitchStitchGif2, TwitchStitchLogo, TwitchStitch1, TwitchStitch2, TwitchStitch3,
MoodMateGif, MoodMate1, MoodMate2, MoodMate3, MoodMate4, MoodMate5
} from "../../images";

import Back from "../../images/back.svg";
import {
    useHistory,
    useParams
  } from "react-router-dom";
  import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const projectsData = {
    TagWithMe: {
        name: 'TagWithMe',
        logo: TagWithMeLogo,
        screenshots: [TagWithMeGif],
        summary: 'Full stack web application for interacting with users interested in social events.',
        scopes: ['UI/UX', 'Front-End', 'Back-End', 'Database Management', 'Project Management'],
        technologies: ['React', 'Redux', 'Node', 'Express', 'Postgres', 'Socket.io', 'Ant Design', 'Sass', 'TicketMasterAPI', 'MapBoxAPI'],
        features: [
            'Designed and developed responsive front-end with reusable components using React, Redux and Ant Design',
            'Developed and maintained databases and REST API using Node.js, Express and PostgreSQL',
            'Integrated TicketMaster API for fetching social events data and MapBox API for location and map data',
            'Implemented push notifications and live chat using Socket.io'
        ],
        code: 'https://github.com/avnvbhatta/tagwithme-frontend',
        demo: null
        
    },
    TwitchStitch: {
        name: 'TwitchStitch',
        logo: TwitchStitchLogo,
        screenshots: [TwitchStitchGif, TwitchStitchGif2, TwitchStitch1, TwitchStitch2, TwitchStitch3],
        summary: 'React app to watch multiple Twitch streams simultaneously.',
        scopes: ['UI/UX', 'Front-End', 'Back-End', 'Database Management', 'Project Management'],
        technologies: ['React', 'Sass', 'CSS Grids', 'TwitchAPI'],
        features: [
            'Designed and developed responsive front-end using React and HTML5/CSS',
            'Implemented CSS grids to effectively utilize screen space and optimize for all screen sizes',
            'Integrated Twitch API for getting live feeds and comments for channels',
            'Applied styling consistent to the original Twitch theme and added night mode'
        ],
        code: 'https://github.com/avnvbhatta/twitchstitch',
        demo: 'https://twitchstitch.app/',
    },
    MoodMate: {
        name: 'MoodMate',
        logo: MoodMateLogo,
        screenshots: [MoodMateGif, MoodMate2, MoodMate1, MoodMate3, MoodMate4, MoodMate5],
        summary: 'Web application for creating highly customized Spotify playlists.',
        scopes: ['UI/UX', 'Front-End', 'Back-End', 'Project Management'],
        technologies: ['Angular', 'Node', 'Express', 'Bootstrap', 'SpotifyAPI'],
        features: [
            'Designed and developed responsive front-end using Angular and Bootstrap',
            'Integrated Spotify API using Spotify\'s OAuth authentication standards',
            'Created API endpoints using Node and Express',
        ],
        code: null,
        demo: 'https://moodmate.herokuapp.com',
    }
}

const ProjectDetail = () => {
    let { projectName } = useParams();
    const projectData = projectsData[`${projectName}`];
    const {name, screenshots, summary, scopes, technologies, features, code, demo} = projectData;
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    }

    useEffect(()=>{
        window.scrollTo(0,0);
    }, [])
    return ( 
        <div className="container">
            <img className="back" src={Back} alt="back" onClick={goBack}/>
            <h1>{name}</h1>
            <div className="underline"></div>
            <p className="summary">
                {summary}
            </p>
            <div className="content">
                <div className="left">
                    <Carousel className="carousel" showThumbs={true}  infiniteLoop>
                        {screenshots && screenshots.map((screenshot, index) => {
                            return (
                                <div key={index}>
                                    <img src={screenshot} alt="screenshot"/>
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
                <div className="right">
                    <h3>Scope</h3>
                    <div className="roles">
                        {scopes && scopes.map(role => {
                            return(
                            <div className="role" key={role}>{role}</div>
                            )
                        })}
                    </div>
                    <h3>Technologies</h3>
                    <div className="technologies">
                        {technologies && technologies.map(technology => {
                            return(
                                <div className="technology" key={technology}>{technology}</div>
                            )
                        })}
                    </div>
                    <h3>Features</h3>
                    <ul>
                        {features && features.map(feature=>{
                            return(
                            <li key={feature}>{feature}</li>
                            )
                        })}
                     </ul>
                    <div className="buttons">
                        {demo && <a className="button" href={demo}  target="_blank" rel="noopener noreferrer">View Demo</a>}
                        {code && <a className="button" href={code}   target="_blank" rel="noopener noreferrer">View Code</a>}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProjectDetail;