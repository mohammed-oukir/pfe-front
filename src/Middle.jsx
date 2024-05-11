import React from 'react';
import './Middle.css'; // Assurez-vous que ce fichier CSS est correctement lié
import femmeImage from './femme.jpg'; // Importez l'image depuis votre dossier src

const Middle = () => {
    return (
        <div className="middle-container">
            <img src={femmeImage} alt="Femme" className="center-image" />
            <div className="image-message">
                Welcome to Find Worker!<br />
                Find trusted professionals in seconds.<br />
                From electricians to plumbers,<br />
                We connect you with skilled experts for any job.<br />
                Browse, book, and get it done hassle-free.
                <button className="start-button">Start Now</button>
            </div>
        </div>
    );
}

export default Middle;
