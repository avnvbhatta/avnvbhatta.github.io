import React, { useState, useEffect, useRef } from 'react';
import "./navbar.scss";
import { Link } from 'react-scroll';
import Menu from "../../images/menu.svg";
import Close from "../../images/close.svg";
import {TimelineLite, Power3, TweenMax} from "gsap";


const NavBar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }
    const Links = () => {
        return (
            <>
                <Link className="nav-link" activeClass="active" to="portfolio" spy={true} smooth={true} duration={800}  onClick={() => setShowDropdown(false)}>
                    <h2>portfolio</h2>
                </Link>
                <Link className="nav-link" activeClass="active" to="contact" spy={true} smooth={true} duration={800} offset={150} onClick={() => setShowDropdown(false)}>
                    <h2>contact me</h2>
                </Link>
            </>
        )
    }
    let navBar = useRef(null);
    let tl = new TimelineLite();
    useEffect(() => {
        tl.fromTo(navBar, {opacity: 0, ease: Power3.easeOut, duration: 0.1, delay:4}, {opacity: 1, ease: Power3.easeOut, delay: 4}  )

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