import React from 'react';
import './ServicesSection.css'; // Assurez-vous que ce fichier CSS est correctement lié
import professionalImage from './najar.jpeg'; // Image symbolique des professionnels
import professionalImage1 from './Sabagh.jpg'; // Autre image symbolique des professionnels



const ServicesSection = () => {
    return (
        <div className="services-container">
            {/* Première partie : Texte à gauche, image à droite */}
            <div className="services-section">
                <div className="text-content">
                    <h2>Connectez-vous avec des professionnels de confiance</h2>
                    <p>Notre plateforme simplifie votre recherche de professionnels qualifiés en vous connectant rapidement avec des experts dans divers domaines. Chez Find Worker, nous croyons en la qualité et la fiabilité.</p>
                    <p>Réservez des services en toute confiance, bénéficiez de prix transparents et sans frais cachés. Notre engagement ne s'arrête pas à la mise en relation. Nous offrons un support continu et une garantie de satisfaction.</p>
                    <p><i>"Le service client a été exceptionnel, et les résultats ont dépassé nos attentes!" - Client satisfait</i></p>
                </div>
                <div className="image-content">
                    <img src={professionalImage} alt="Professionnels au travail" />
                </div>
            </div>

            {/* Deuxième partie : Image à gauche, texte à droite */}
            <div className="services-section reverse">
                <div className="image-content">
                    <img src={professionalImage1} alt="Professionnels au travail1" />
                </div>
                <div className="text-content">
                    <h2>Découvrez des experts pour chaque tâche</h2>
                    <p>Explorez une vaste sélection de professionnels expérimentés et certifiés, prêts à vous aider dans vos projets les plus complexes. Notre plateforme vous permet de gérer vos projets avec efficacité, offrant des solutions adaptées à chaque exigence spécifique.</p>
                    <p>Commencez dès maintenant et vivez une expérience de service inégalée, avec des professionnels prêts à dépasser vos attentes.</p>
                    <p><strong>Plus de 5 000 projets réussis chaque année!</strong></p>
                </div>
            </div>

                  

    {/* Nouvelle partie pour mettre en avant les avantages */}
    <div className="service-highlights">
                <div className="highlights-text">
                    <h2>Le meilleur ? Tout.</h2>
                    <p><strong>Respecter votre budget</strong><br />
                    Trouvez des services de haute qualité à tous les prix. Pas de tarifs horaires, mais une tarification en fonction des projets.</p>
                    <p><strong>Un travail de qualité réalisé rapidement</strong><br />
                    Collaborez avec un expert dès maintenant pour des solutions pérennes en un clin d'œil.</p>
                    <p><strong>Payer une fois satisfait(e)</strong><br />
                    Les devis sont établis à l'avance, ce qui évite les surprises. Le paiement est débloqué uniquement lorsque vous l'approuvez.</p>
                    <p><strong>Une assistance 24h/24 et 7j/7</strong><br />
                    Notre équipe d'assistance est disponible 24 heures sur 24 pour vous aider à tout moment et en tout lieu.</p>
                </div>
               
            </div>
                  

           
        </div>
    );
}

export default ServicesSection;
