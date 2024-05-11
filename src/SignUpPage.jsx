import React, { useState } from 'react';
import ChoiceCard from './ChoiceCard';
import FooterSignup from './FooterSignup';
import './SignUpPage.css'; // Importe le CSS de la page

function SignUpPage() {
  const [selection, setSelection] = useState(null);

  return (
    <div className="sign-up-page">
      <header>
        <h1>Join as a client or Professionnel</h1>
      </header>
      <main>
        <ChoiceCard 
          title="I'm a client, hiring for a project"
          className="client"
          onClick={() => setSelection('client')}
          selected={selection === 'client'}
        />
        <ChoiceCard 
          title="I'm a prefessionnels, looking for work"
          className="freelancer"
          onClick={() => setSelection('freelancer')}
          selected={selection === 'freelancer'}
        />
      </main>
      <FooterSignup />
    </div>
  );
}

export default SignUpPage;
