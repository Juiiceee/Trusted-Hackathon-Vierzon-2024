"use client";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Connect() {
  const { address } = useAccount();

  const buttonContainerStyles = {
    position: "relative" as const,
    display: "inline-block",
    borderRadius: "30px", // Arrondi des bords
  };

  const customButtonStyles = {
    background: "black", // Fond noir
    border: "none", // Pas de bordure directe
    borderRadius: "30px", // Arrondi des bords
    padding: "10px 30px", // Taille du bouton
    color: "white", // Texte en blanc
    fontSize: "18px",
    fontWeight: "bold" as const,
    cursor: "pointer",
    position: "relative" as const,
    zIndex: 2, // Bouton au-dessus du pseudo-élément
    overflow: "hidden", // S'assure que le contenu ne dépasse pas
  };

  const pseudoElementStyles = {
    content: '""',
    position: "absolute" as const,
    top: "-2px", // Ajuste pour que le pseudo-élément entoure bien le bouton
    left: "-2px",
    right: "-2px",
    bottom: "-2px",
    borderRadius: "30px", // Arrondi pour suivre la forme du bouton
    padding: "2px", // Espace pour simuler une bordure
    background: "linear-gradient(90deg, #8a2be2, #ff7f50)", // Dégradé
    zIndex: 1, // Derrière le bouton
  };

  const customButtonHoverStyles = {
    background: "rgba(0, 0, 0, 0.9)", // Léger assombrissement au survol
  };

  return (
    <div
      className={
        !address
          ? "flex items-center justify-center min-h-screen"
          : "flex items-center justify-end"
      }
    >
      <ConnectButton.Custom>
        {({ openConnectModal }) => (
          // Afficher le bouton personnalisé uniquement si l'utilisateur n'est pas connecté
          !address ? (
            <div style={buttonContainerStyles}>
              <button
                onClick={openConnectModal}
                style={customButtonStyles}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = customButtonHoverStyles.background;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = customButtonStyles.background;
                }}
              >
                Connecter votre wallet
              </button>
              {/* Pseudo-élément pour créer le contour dégradé arrondi */}
              <div style={pseudoElementStyles}></div>
            </div>
          ) : (
            // Afficher le bouton par défaut RainbowKit si connecté
            <ConnectButton chainStatus="icon" />
          )
        )}
      </ConnectButton.Custom>
    </div>
  );
}
