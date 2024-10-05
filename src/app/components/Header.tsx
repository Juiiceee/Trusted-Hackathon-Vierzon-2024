import React from "react";
import Connect from "../components/Connect"; // Assurez-vous que le chemin est correct

export default function Header() {
  // Styles du logo Trusted
  const logoStyles = {
    fontFamily: "Poppins, sans-serif",
    fontSize: "40px",
    fontWeight: 800,
    lineHeight: "20px",
    letterSpacing: "-0.14px",
    textAlign: "left" as const,
    background:
      "linear-gradient(81.31deg, #8636F8 2.26%, #F020B3 34.84%, #F8475E 67.42%, #FF9421 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

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
        <a href="/" style={logoStyles}>
          Trusted
        </a>
      </div>

      {/* Liens au centre */}
      <nav style={{ display: "flex", alignItems: "center" }}>
        <a href="join" style={navLinkStyles}>
          Nous rejoindre
        </a>
        <a href="projectpage" style={navLinkStyles}>
          Notre projet
        </a>
      </nav>

      {/* Bouton Connect à droite */}
      <div>
        <Connect />
      </div>
    </header>
  );
}
