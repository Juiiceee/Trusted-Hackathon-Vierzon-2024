'use client';

import { useState } from 'react';
import Image from 'next/image';
import { DialogOverlay, DialogContent, DialogTitle, DialogClose } from '@radix-ui/react-dialog';
import { Button } from './Button';

interface ProjectCardModalProps {
  poolAddress: string;
  donationAmount: number;
  onClose: () => void; // Fonction pour fermer le modal
}

export default function ProjectCardModal({ poolAddress, donationAmount, onClose }: ProjectCardModalProps) {
  const [donationInput, setDonationInput] = useState(donationAmount.toString());

  const handleDonation = () => {
    console.log(`Don de ${donationInput} AVAX soumis`);
    onClose(); // Fermer le modal après avoir validé le don
  };

  return (
    <>
      <DialogOverlay className="fixed inset-0 bg-black opacity-50" />
      <DialogContent className="fixed top-[50%] left-[50%] w-full max-w-md p-6 bg-white rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2">
        <DialogTitle className="text-lg font-bold mb-4">Faire un don</DialogTitle>

        <div className="flex items-center gap-4 mb-4">
          <Image src="/images/ava.png" alt="Avalanche Icon" width={30} height={30} />
          <input
            type="number"
            value={donationInput}
            onChange={(e) => setDonationInput(e.target.value)}
            placeholder="0.0"
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          />
          <span className="text-sm text-gray-500">AVAX</span>
        </div>

        <div className="flex justify-end gap-2">
          <DialogClose asChild>
            <Button variant="outline" onClick={onClose}>Annuler</Button>
          </DialogClose>
          <Button onClick={handleDonation}>Valider le don</Button>
        </div>
      </DialogContent>
    </>
  );
}
