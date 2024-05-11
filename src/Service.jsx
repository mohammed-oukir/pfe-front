import React from 'react';
import './Service.css';

const professionals = [
  { id: 1, name: "Alice Dupont", profession: "Plombier", description: "Spécialiste en installations sanitaires et chauffage.", level: "Expert", price: "À partir de 80 €", image: "url-de-l'image" },
  // Ajoutez d'autres professionnels ici
];

const Service = () => {
  return (
    <div className="service-container">
      {professionals.map(pro => (
        <div key={pro.id} className="card">
          <img src={pro.image} alt={pro.name} className="profile-image" />
          <div className="card-info">
            <h3>{pro.name}</h3>
            <p className="profession">{pro.profession}</p>
            <p className="description">{pro.description}</p>
            <p className="price">{pro.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;
