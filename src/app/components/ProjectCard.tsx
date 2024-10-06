'use client';

import { useState } from 'react';
import Image from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from './Button';
import ProjectCardModal from './ProjectCardModal'; // Import du modal

interface ProjectCardProps {
  nom: string;
  latitude: string;
  longitude: string;
  poolAddress: string;
  goal: number;
  raised: number;
  recentDonors: string[];
  donationAmount: number;
  donationValue: string;
  imageUrl: string;
  description: string;
  tag: string;
  status: string;
}

export default function ProjectCard({
  nom,
  latitude,
  longitude,
  poolAddress,
  goal,
  raised,
  recentDonors,
  donationAmount,
  donationValue,
  imageUrl,
  description,
  tag,
  status,
}: ProjectCardProps) {
  const progress = (raised / goal) * 100;
  const [openModal, setOpenModal] = useState(false); // État pour contrôler l'ouverture du modal

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md p-4 border border-purple-300">
      {/* Image et overlay */}
      <div className="relative w-full h-[200px]">
        <Image
          src={imageUrl}
          alt="Project Image"
          layout="fill"
          objectFit="cover"
        />
        {/* Statut du projet */}
        <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded">
          {status}
        </span>
        {/* Barre de progression */}
        <div className="absolute bottom-2 left-2 bg-white text-purple-600 text-xs px-2 py-1 rounded">
          {Math.floor(progress)}%
        </div>
        {/* Objectif en bas à droite de l'image */}
        <div className="absolute bottom-2 right-2 bg-white text-gray-800 text-sm px-2 py-1 rounded">
          Objectif: {goal} AVAX
        </div>
      </div>

      <div className="p-4">
        {/* Nom de l'association et tag */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">{nom}</h3>
          <span className="bg-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full">
            {tag}
          </span>
        </div>

        {/* Adresse de l'association */}
        <div className="mb-4 text-gray-600">
          <p>{poolAddress}</p>
          <p>{latitude}, {longitude}</p>
        </div>

        {/* Description du projet */}
        <p className="text-gray-700 mb-4">{description}</p>

        {/* Total des dons */}
        <div className="flex items-center mb-4">
          <Image src="/images/ava.png" alt="AVAX Logo" width={24} height={24} />
          <p className="ml-2 font-semibold">{donationAmount} AVAX</p>
          <p className="ml-2 text-gray-500">({donationValue})</p>
        </div>

        {/* Bouton "Faire un don" avec onClick */}
        <Button
          onClick={handleOpenModal}
          className="bg-black text-white px-4 py-2 rounded-full w-full hover:bg-gray-800 transition-colors border-2 border-gradient-to-r from-gray-400 to-gray-800"
        >
          Faire un don
        </Button>

        {/* Modal déclenché par onClick */}
        {openModal && (
          <Dialog.Root open={openModal} onOpenChange={setOpenModal}>
            <Dialog.Portal>
              <ProjectCardModal
                poolAddress={poolAddress}
                donationAmount={donationAmount}
                onClose={handleCloseModal} // Passer la fonction de fermeture si nécessaire
              />
            </Dialog.Portal>
          </Dialog.Root>
        )}

        {/* Liste des donateurs */}
        <div className="mt-4">
          <h4 className="font-semibold mb-2">Donateurs</h4>
          <ul className="text-gray-600">
            {recentDonors.map((donor, index) => (
              <li key={index}>{donor}</li>
            ))}
          </ul>
          <a href="#" className="text-purple-600 mt-2 inline-block">Afficher tous les donateurs</a>
        </div>
      </div>
    </div>
  );
}
