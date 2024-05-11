import React from 'react';
import './FooterSignup.css'; // CSS spécifique pour Footer

function FooterSignup() {
  return (
    <footer>
      <button>Create Account</button>
      <p>Already have an account? <a href="/login">Log In</a></p>
    </footer>
  );
}

export default FooterSignup;
