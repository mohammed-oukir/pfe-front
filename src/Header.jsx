import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <header>
            <nav className="navbar">
                <div className="navbar-brand">
                    <a href="/" className="logo">Find Worker</a>
                </div>
                <div className="navbar-menu">
                    <button onClick={() => scrollToSection('about-section')} className="nav-link">À propos</button>
                    <button onClick={() => scrollToSection('section-faq')} className="nav-link">FAQ</button>
                    <button onClick={() => scrollToSection('contact-section')} className="nav-link">Contact</button>
                    <div className="search-container">
                        <input type="text" placeholder="Search..." className="search-input"/>
                        <select className="search-select" placeholder="JOB">
                            <option>Plombier</option>
                            <option>Menuisier</option>
                            <option>Électricien</option>
                            <option>Maçon</option>
                            <option>Charpentier</option>
                            <option>Couvreur</option>
                            <option>Plâtrier</option>
                            <option>Peintre en bâtiment</option>
                            <option>Paysagiste</option>
                            <option>Mécanicien</option>
                            <option>Vitrier</option>
                            <option>Carreleur</option>
                            <option>Serrurier</option>
                            <option>Chauffagiste</option>
                        </select>
                    </div>
                    <Link to="/login" className="nav-link nav-link-special">Connexion</Link>
                    <a href="http://localhost:5174/login" className="nav-link nav-link-special">Inscription</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
