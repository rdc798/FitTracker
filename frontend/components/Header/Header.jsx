import './Header.css';
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faSun } from '@fortawesome/free-solid-svg-icons';

function Header({isOpen, setIsOpen}) {

    const toggleHamburger = () => {
        setIsOpen(!isOpen)
    };

    const [ isDarkMode, setIsDarkMode ] = useState(true);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return(
        <>
        <div className='wrapperDark'>
            <header>
                    <nav className={`topNav ${isOpen ? "open" : ""}`}>
                        <div>
                            <a href="/Home" className="links logo">Home</a>
                        </div>
                        <div className="extraLinks">
                            <a href="/WorkoutLog">Workout Log</a>
                            <a href="#">Diet</a>
                            <a href="#">Progress</a>
                        </div>
                        <ul>
                            <li><FontAwesomeIcon onClick={toggleDarkMode} icon={faSun} className={`sun ${isDarkMode ? "light" : "dark"}`}/></li>
                            <li><a href="#" className="links login desktop" >Log In</a></li>
                            <li><a href="#" className="links register desktop" >Register</a></li>
                            <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleHamburger}>
                                <FontAwesomeIcon  className="icon" icon={isOpen ? faTimes : faBars} size="lg" />
                            </div>
                        </ul>
                    </nav>
                </header>
                <div className="hamburgerOpenContainer">
                    <div className={`hamburgerOpen ${isOpen ? "open" : "closed"}`}>
                        <div className="border">
                            <hr />
                        </div>
                        <div className="hamburgerLinks">
                            <a href="/WorkoutLog">Workout Log</a>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                        <div className="border">
                            <hr />
                        </div>
                        <div className="hamburgerLinks">
                            <a href="#">Link</a>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                        <div className="border">
                            <hr />
                        </div>
                        <div className="hamburgerLinks">
                            <a href="#">Link</a>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                        <ul className="hamburgerOpenLinks">
                            <li><a href="#" className="links login" >Log In</a></li>
                            <li><a href="#" className="links register" >Register</a></li>
                        </ul>
                    </div>
                </div>
        </div>    
        </>
    )
}

export default Header