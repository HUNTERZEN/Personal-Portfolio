import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">

                <div className="navbar-logo" style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '1px' }}>
                    HUNTERZEN
                </div>

                <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>HOME</a></li>
                    <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>ABOUT</a></li>
                    <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>SKILLS</a></li>
                    <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>PROJECTS</a></li>
                    <li><a href="https://github.com/hunterzen" target="_blank" rel="noreferrer" onClick={() => setIsMobileMenuOpen(false)}>GITHUB ↗</a></li>
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;
