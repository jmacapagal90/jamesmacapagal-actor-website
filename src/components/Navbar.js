import React, {useEffect, useState} from 'react';
import './Navbar.css';

function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const desktopBreakpoint = 992;
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= desktopBreakpoint);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= desktopBreakpoint);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [desktopBreakpoint]);

    const handleToggle = () => setIsExpanded(prev => !prev);
    const handleLinkClick = () => setIsExpanded(false);

    const navLinks = (
        <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#reels" onClick={handleLinkClick}>Reel</a></li>
            <li className="nav-item"><a className="nav-link" href="#hero" onClick={handleLinkClick}>Headshots</a></li>
            <li className="nav-item"><a className="nav-link" href="#resume" onClick={handleLinkClick}>Links</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>
    );

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm ${isExpanded ? "show" : ""}`}>
            <div className="container">
                <a className="navbar-brand" href="#reels">James Macapagal</a>
                {!isDesktop && (
                    <button className="navbar-toggler" type="button" onClick={handleToggle}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                )}
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
