import React from 'react';
import './SatisfactionGuaranteeSection.css';
//import guaranteeIcon from './ana.jpg';   Assurez-vous que cette icône existe dans votre dossier assets

const SatisfactionGuaranteeSection = () => {
    return (
        <div className="satisfaction-guarantee-section">
            <h2>Notre Engagement envers Votre Satisfaction</h2>
            <div className="guarantees">
                <div className="guarantee">
                    
                    <h3>100% Satisfaction Garantie</h3>
                    <p>Si vous n'êtes pas entièrement satisfait, nous nous engageons à trouver une solution pour rectifier le problème.</p>
                </div>



                <div className="guarantee">
                    
                    <h3>Assurance Qualité</h3>
                    <p>Tous nos services sont réalisés par des professionnels qualifiés et sont soumis à un contrôle qualité rigoureux.</p>
                
            </div>
                <div className="guarantee">
                    
                    <h3>Support 24/7</h3>
                    <p>Notre équipe de support est toujours disponible pour vous aider et répondre à vos questions à tout moment.</p>
                </div>
            </div>
        </div>
    );
}

export default SatisfactionGuaranteeSection;