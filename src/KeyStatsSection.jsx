import React from 'react';
import './KeyStatsSection.css';

const KeyStatsSection = () => {
    return (
        <div className="key-stats-container">
            <h2>Nos Chiffres Clés</h2>
            <div className="stats">
                <div className="stat-item">
                    <h3>10K+</h3>
                    <p>Clients satisfaits</p>
                </div>
                <div className="stat-item">
                    <h3>500+</h3>
                    <p>Projets par an</p>
                </div>
                <div className="stat-item">
                    <h3>98%</h3>
                    <p>Taux de satisfaction</p>
                </div>
                <div className="stat-item">
                    <h3>24/7</h3>
                    <p>Support client</p>
                </div>
            </div>
        </div>
    );
}

export default KeyStatsSection;