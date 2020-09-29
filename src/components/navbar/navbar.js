import React, { useState, useEffect, useRef } from 'react';
import "./navbar.scss";
import { Link } from 'react-scroll';
import {Menu, Close} from  "../../images";
import {TimelineLite, Power3} from "gsap";

import CSSPlugin from 'gsap/CSSPlugin';

const C = CSSPlugin; 

const NavBar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }
    const Links = () => {
        return (
            <>
                <Link className="nav-link" activeClass="active" to="portfolio" spy={true} smooth={true} duration={800}  onClick={() => setShowDropdown(false)}>
                    Portfolio
                </Link>
                <Link className="nav-link" activeClass="active" to="contact" spy={true} smooth={true} duration={800} offset={150} onClick={() => setShowDropdown(false)}>
                    Contact Me
                </Link>
            </>
        )
    }
    let navBar = useRef(null);
    let tl = new TimelineLite();
    useEffect(() => {
        var animPlayed = sessionStorage.getItem("loadingAnimPlayed");
        if(!animPlayed){
            tl.fromTo(navBar, 
                {opacity: 0, ease: Power3.easeOut, duration: 0.1, delay:2}, 
                {opacity: 1, ease: Power3.easeOut, delay: 2, 
                    onComplete: () => {sessionStorage.setItem("loadingAnimPlayed", true)}
                })
        }
       

    }, [])
    return (
        <div>
            <nav className="navbar" ref={el => navBar = el}>
                <Links className="horizontal"/>
                <img onClick={toggleDropdown} src={showDropdown ? Close : Menu}alt=""/>
            </nav>
            {showDropdown &&
                <div className="dropdown">
                <Links />
                <div className="fill"></div>
            </div>
            }
        </div>
        
    )
}

export default NavBar;