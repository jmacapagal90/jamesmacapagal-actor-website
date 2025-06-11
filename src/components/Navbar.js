import React, {useEffect, useState} from 'react';
import './Navbar.css';

function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth > 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleToggle = () => setIsExpanded(prev => !prev);
    const handleLinkClick = () => setIsExpanded(false);

    const navLinks = (
        <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#about" onClick={handleLinkClick}>About</a></li>
            <li className="nav-item"><a className="nav-link" href="#resume" onClick={handleLinkClick}>Resume</a></li>
            <li className="nav-item"><a className="nav-link" href="#reels" onClick={handleLinkClick}>Reels</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>
    );

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm ${isExpanded ? "show" : ""}`}>
            <div className="container">
                <a className="navbar-brand" href="#hero">James Macapagal</a>
                <button className="navbar-toggler" type="button" onClick={handleToggle}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                {isDesktop ? navLinks : (
                <div className={`collapse navbar-collapse ${isExpanded ? "show animated" : ""}`} id="navbarNav">
                    {navLinks}
                </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;