"use client"

import { useState } from 'react';
import ProjectCard from "../components/ProjectCard"; // Import du composant ProjectCard
import SearchBar from "../components/SearchBar"; // Import du composant SearchBar

// Simple Badge component for manual styles
import { ReactNode, MouseEventHandler } from 'react';

interface BadgeProps {
  children: ReactNode;
  isActive: boolean;
  onClick: MouseEventHandler<HTMLSpanElement>;
}

const Badge = ({ children, isActive, onClick }: BadgeProps) => (
  <span
    onClick={onClick}
    className={`cursor-pointer px-3 py-1 rounded-full text-sm font-semibold ${
      isActive ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-800'
    }`}
  >
    {children}
  </span>
);

const projects = [
  {
    association: "Association 1",
    location: "99 Rte de M, 72530 Yvre l'Eveque",
    poolAddress: "0x5353TEFHUO48653OHFHPOHDNL1HF1",
    goal: 10,
    raised: 5,
    recentDonors: ['0x5353TEFHUO48653OHFHPOHDNL1HF1'],
    donationAmount: 0.1,
    donationValue: "$242.49",
    imageUrl: "/images/exemple.png",
    title: "Construction pour des enfants défavorisés",
    tag: "Construction",
  },
  {
    association: "Association 2",
    location: "75 Rue de la République, 75000 Paris",
    poolAddress: "0x98ERD45678EFD341R9874TER2349RHJKL",
    goal: 20,
    raised: 12,
    recentDonors: ['0x4564EFHUO4567EFDGFDRYDR7890LFJX'],
    donationAmount: 0.15,
    donationValue: "$364.99",
    imageUrl: "/images/exemple.png",
    title: "Rénovation d'un centre communautaire",
    tag: "Rénovation",
  },
  {
    association: "Association 3",
    location: "23 Boulevard des Capucines, 75009 Paris",
    poolAddress: "0x12FDERO8765EDDERF1234ERQWE456EFGH",
    goal: 15,
    raised: 7.5,
    recentDonors: ['0x98765RTERF12345678901'],
    donationAmount: 0.25,
    donationValue: "$605.99",
    imageUrl: "/images/Group1.png",
    title: "Programme d'aide alimentaire",
    tag: "Aide alimentaire",
  },
  {
    association: "Association 4",
    location: "43 Avenue des Champs-Élysées, 75008 Paris",
    poolAddress: "0xA12FDERO45678EDDRRG456ETREWE234F",
    goal: 30,
    raised: 18,
    recentDonors: ['0x45HYUO768REWQEFRTYGFD'],
    donationAmount: 0.5,
    donationValue: "$1200.00",
    imageUrl: "/images/exemple.png",
    title: "Programme de scholarship",
    tag: "Scholarship",
  },
];

export default function DonationMarketplace() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  // Filtrer les projets par tag et par recherche
  const filteredProjects = projects.filter((project) =>
    (selectedTag === "" || project.tag === selectedTag) &&
    (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.association.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Extraire les tags uniques des projets
  const tags = Array.from(new Set(projects.map((project) => project.tag)));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Nos projets caritatifsa</h1>
      
      {/* Barre de recherche */}
      <div className="mb-8">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      {/* Filtre par tag */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {/* Badge "Tous" pour réinitialiser le filtre */}
          <Badge
            isActive={selectedTag === ""}
            onClick={() => setSelectedTag("")}
          >
            Tous
          </Badge>

          {/* Générer un badge pour chaque tag unique */}
          {tags.map((tag) => (
            <Badge
              key={tag}
              isActive={selectedTag === tag}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Affichage des cartes filtrées */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {/* Message si aucun projet ne correspond à la recherche ou au tag */}
      {filteredProjects.length === 0 && (
        <p className="text-center mt-8 text-lg">Aucun projet ne correspond à votre recherche.</p>
      )}
    </div>
  );
}
