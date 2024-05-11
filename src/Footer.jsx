import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
            <div className="footer-section" id="about-section">
                    <h3>À propos</h3>
                    <p>Nous connectons les meilleurs professionnels avec des clients qui recherchent des services de qualité. Découvrez comment nous pouvons vous aider à réaliser vos projets avec efficacité et professionnalisme.</p>
                </div>
                <div className="footer-section" id="contact-section">
                    <h3>Contact</h3>
                    <p>Téléphone: 0505055005</p>
                    <p>Email: Find-Worker@gmail.com</p>
                </div>
                <div className="footer-section">
                    <h3>Suivez-nous</h3>
                    <p>Restez connecté avec nous sur les réseaux sociaux pour obtenir les dernières nouvelles et offres spéciales.</p>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
                {/* Other content */}
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Votre Entreprise. Tous droits réservés.</p>
            </div>
        </footer>
    );
}

export default Footer;
