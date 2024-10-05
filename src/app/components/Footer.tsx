import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f1f1f1' }}>
      <p>
        <a href="/legal/mentions_legales.pdf" target="_blank" rel="noopener noreferrer">
          Mentions Légales
        </a>
        {' | '}
        <a href="/legal/cgu.pdf" target="_blank" rel="noopener noreferrer">
          Conditions Générales d'Utilisation
        </a>
        {' | '}
        <a href="/legal/politique_confidentialite.pdf" target="_blank" rel="noopener noreferrer">
          Politique de Confidentialité
        </a>
      </p>
    </footer>
  );
};

export default Footer;
