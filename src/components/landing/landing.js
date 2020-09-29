import React , {useRef, useEffect} from 'react';
import './landing.scss';
import {Avatar, LinkedInLogo, GithubLogo, ResumeLogo, EmailLogo, Resume, Background} from  "../../images";

import {TimelineLite, Power3} from "gsap";


const Landing = () => {
    let background = useRef(null);
    let name = useRef(null);
    let summary = useRef(null);
    let avatar = useRef(null);
    let contactIcons = useRef(null);


    let tl = new TimelineLite();

    useEffect(() => {
        var animPlayed = sessionStorage.getItem("loadingAnimPlayed");
        if(!animPlayed){
            tl.fromTo(avatar, {opacity: 0, ease: Power3.easeInOut}, {opacity: 1, ease: Power3.easeInOut, duration: 0.8}, )
            .from(name, {y: 1280, ease: Power3.easeOut, duration: 0.8} , "-=0.4" )
            .from(summary, {x: -1280, ease: Power3.easeOut, duration: 1}, "-=0.4")
            .fromTo(background, {css: {width: '100%', opacity:0, ease: Power3.easeOut}}, {css: {width: '250%',opacity:1,  ease: Power3.easeOut}, duration: 3}, "-=1.2" )
            .from(contactIcons,  {y: 200, ease: Power3.easeOut, duration: 0.6, onComplete: () => {sessionStorage.setItem("loadingAnimPlayed", true)}}, "-=2"  , )
        }
    }, [])
    
    return(
        <div className="landing" >
            <img className="background" src={Background} alt="" ref={el => background=el}/>

            <div className="content">
                <div className="welcome">
                    <h1 ref={el => name=el}>hi, my name is abhinav</h1>
                    <h2 ref={el => summary=el}>I like creating elegant and fluid websites</h2>
                </div>
                <img src={Avatar} ref={el => avatar=el} alt="avatar" className="avatar" />
                <div className="contact-icons" ref={el => contactIcons=el}>
                    <a href="http://www.linkedin.com/in/avnvbhatta" target="_blank" rel="noopener noreferrer"><img src={LinkedInLogo} alt="linkedin" className="contact-icon"/></a>
                    <a href="http://www.github.com/avnvbhatta" target="_blank" rel="noopener noreferrer"><img src={GithubLogo} alt="linkedin" className="contact-icon"/></a>
                    <a href={Resume} download target="_blank" rel="noopener noreferrer"><img src={ResumeLogo} alt="linkedin" className="contact-icon"/></a>
                    <a href="mailto:avnvbhatta@gmail.com" target="_blank" rel="noopener noreferrer"><img src={EmailLogo} alt="linkedin" className="contact-icon"/></a>
                </div>
            </div>
        </div>
    )
}

export default Landing;