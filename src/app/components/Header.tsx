import React from "react";
import Image from 'next/image'; // Si tu utilises Next.js
import Connect from "../components/Connect"; // Assurez-vous que le chemin est correct

export default function Header() {
  const navLinkStyles = {
    fontFamily: "Poppins, sans-serif",
    fontSize: "18px",
    fontWeight: "400",
    margin: "0 20px",
    cursor: "pointer",
    textDecoration: "none",
    color: "#333", // Couleur des liens de navigation
  };

  return (
    <header
      style={{
        position: "fixed", // Fixe le header en haut
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000, // S'assure qu'il est au-dessus des autres éléments
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#fff", // Fond blanc pour le header
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Légère ombre pour le header
        height: "80px", // Hauteur du header
      }}
    >
      {/* Logo et bouton Home */}
      <div>
        <a href="/">
          {/* Utilisation de l'image pour le logo */}
          <Image
            src="/images/Frame.png" // Chemin vers ton image dans le dossier public
            alt="Logo Trusted"
            width={150} // Ajuste la largeur selon tes besoins
            height={50} // Ajuste la hauteur selon tes besoins
          />
        </a>
      </div>

      {/* Liens au centre */}
      <nav style={{ display: "flex", alignItems: "center" }}>
        <a href="join" style={navLinkStyles}>
          Nous rejoindre
        </a>
        <a href="projectpage" style={navLinkStyles}>
          Nos projet
        </a>
      </nav>

      {/* Bouton Connect à droite */}
      <div>
        <Connect />
      </div>
    </header>
  );
}
