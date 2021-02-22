import React , {useRef, useEffect} from 'react';
import './landing.scss';
import Avatar from "../../images/Avatar.svg";
import LinkedInLogo from "../../images/linkedin.svg";
import GithubLogo from "../../images/github.svg";
import ResumeLogo from "../../images/resume.svg";
import EmailLogo from "../../images/email.svg";
import Resume from "../../images/Resume_Abhinav_Bhatta.pdf";
import Background from "../../images/background.svg";

import {TimelineLite, Power3} from "gsap";

const Landing = () => {
    let background = useRef(null);
    let name = useRef(null);
    let summary = useRef(null);
    let avatar = useRef(null);
    let contactIcons = useRef(null);


    let tl = new TimelineLite();

    useEffect(() => {
        tl.fromTo(avatar, {opacity: 0, ease: Power3.easeInOut}, {opacity: 1, ease: Power3.easeInOut, duration: 1.2}, )
            .from(name, {y: '-100vh', ease: Power3.easeOut, duration: 1}  )
            .from(summary, {y: '200vh', ease: Power3.easeOut, duration: 1.5})
            .fromTo(background, {css: {width: '200%', opacity:0, ease: Power3.easeOut}}, {css: {width: '100%', bottom: '15vh', opacity: 1, ease: Power3.easeOut}, duration: 3}, "-=2" )
            .to(contactIcons,  {opacity: 1, ease: Power3.easeOut, duration: 0.6, bottom: '5px'}, "-=1"  )

    }, [])
    
    return(
        <div className="landing" >
            <img className="background" src={Background} alt="" ref={el => background=el}/>

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
    )
}

export default Landing;