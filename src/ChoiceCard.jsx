import React from 'react';
import './ChoiceCard.css'; // Assurez-vous que le CSS est correctement lié

function ChoiceCard({ title, onClick, selected, className }) {
  return (
    <button className={`choice-card ${className} ${selected ? 'selected' : ''}`} onClick={onClick}>
     
      <div className="title">{title}</div>
    </button>
  );
}

export default ChoiceCard;

