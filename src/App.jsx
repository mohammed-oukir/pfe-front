import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/modules/Header'; // Importez le composant Header
import Middle from './Middle'; // Importez le composant Middle
import ServicesSection from './ServicesSection'; // Importez la section des services
import FAQSection from './FAQSection'; // Importez la section FAQ
import TestimonialsSection from './TestimonialsSection'; // Importez la section des témoignages
import SatisfactionGuaranteeSection from './SatisfactionGuaranteeSection'; // Importez la section de garantie
import KeyStatsSection from './KeyStatsSection'; // Importez la section des statistiques clés
import Footer from './Footer'; // Importez le footer
import LoginPage from './LoginPage'; // Importez la page de connexion
import RegisterPro from './RegisterPro'; // Importez la page de connexion
import RegisterClien from './RegisterClien'; // Importez la page de connexion


import './App.css'; // Importez la feuille de style principale*/
import SignUpPage from './SignUpPage'
import Service from './Service'
import HomePage from './components/page/HomePage';

function App() {
  return (
    <HomePage/>
  );
}

export default App;
