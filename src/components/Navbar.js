import React, {useState} from 'react';
import './Navbar.css';

function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm ${isExpanded ? "show" : ""}`}>
            <div className="container">
                <a className="navbar-brand" href="#hero">James Macapagal</a>
                <button className="navbar-toggler" type="button" onClick={handleToggle}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isExpanded ? "show animated" : ""}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#resume">Resume</a></li>
                        <li className="nav-item"><a className="nav-link" href="#reels">Reels</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;