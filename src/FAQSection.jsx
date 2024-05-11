import React, { useState } from 'react';
import './FAQSection.css'; // Assurez-vous que ce fichier CSS est correctement lié

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const questionsAnswers = [
        {
            question: "Comment puis-je réserver un service sur votre plateforme ?",
            answer: "Vous pouvez réserver un service en naviguant vers la page du service désiré et en cliquant sur le bouton 'Réserver'. Vous devrez ensuite remplir les détails nécessaires et confirmer votre réservation."
        },
        {
            question: "Quels types de paiements acceptez-vous ?",
            answer: "Nous acceptons plusieurs méthodes de paiement, y compris les cartes de crédit, les virements bancaires et les paiements via des plateformes tierces comme PayPal."
        },
        {
            question: "Est-il possible d'annuler une réservation ?",
            answer: "Oui, vous pouvez annuler une réservation directement depuis votre compte utilisateur sous certaines conditions. Veuillez consulter notre politique d'annulation pour plus de détails."
        }
    ];

    const handleToggle = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-section" id='section-faq'>
            <h2>FAQ - Questions Fréquemment Posées</h2>
            {questionsAnswers.map((item, index) => (
                <div key={index} className="faq-item">
                    <button className="faq-question" onClick={() => handleToggle(index)}>
                        {item.question}
                    </button>
                    <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                        {item.answer}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQSection;
