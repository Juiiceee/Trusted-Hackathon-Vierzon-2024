'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useAccount, useWriteContract } from 'wagmi';
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from './Button'; // Si le bouton est aussi dans "components"
import { contractABIDonation, contractAdressDonation } from '../constants/donation';
import { parseEther } from 'ethers';
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
}: ProjectCardProps) {
	const [donationInput, setDonationInput] = useState('0.0');
	const { address } = useAccount();
	const { data: hash, isPending, error, writeContract } = useWriteContract();
	const putNumber = async () => {
		writeContract({
			address: contractAdressDonation,
			abi: contractABIDonation,
			functionName: "donate",
			overrides: {
				value: parseEther(donationInput),
			},
		})
	}

	const handleDonation = () => {
		putNumber();
		console.log(`Don de ${donationInput} AVAX soumis`);
	};

	return (
		<div className="bg-white rounded-lg overflow-hidden shadow-md p-4 border border-purple-300">
			<div className="relative w-full h-[200px]">
				<Image
					src={imageUrl}
					alt="Project Image"
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<div className="p-4">
				<div className="flex justify-between items-center mb-4">
					<h3 className="font-bold text-lg">{nom}</h3>
					<span className="bg-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full">
						{tag}
					</span>
				</div>

        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">{description}</h4>
          <div className="flex items-center mb-2">
            <Image src="/images/wallet.png" alt="Wallet Icon" width={20} height={20} />
            <span className="ml-2 text-sm text-gray-600">{poolAddress}</span>
          </div>
          <div className="flex items-center mb-2">
            <Image src="/images/id-solid.png" alt="Location Icon" width={20} height={20} />
            <span className="ml-2 text-sm text-gray-600">
              Latitude: {latitude}, Longitude: {longitude}
            </span>
          </div>
          <div className="flex items-center mb-4">
            <Image src="/images/ava.png" alt="Avalanche Icon" width={30} height={30} />
            <span className="ml-2 font-bold text-lg">{donationAmount} AVAX</span>
            <span className="ml-2 text-sm text-gray-500">({donationValue})</span>
          </div>

					{/* Button to open the modal */}
					<Dialog.Root>
						<Dialog.Trigger asChild>
							<Button className="w-full bg-black text-white hover:bg-gray-800 mb-4">
								Faire un don
							</Button>
						</Dialog.Trigger>

						{/* Modal Dialog */}
						<Dialog.Portal>
							<Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
							<Dialog.Content className="fixed top-1/2 left-1/2 w-full max-w-md p-6 bg-white rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2">
								<Dialog.Title className="text-lg font-bold mb-4">Faire un don</Dialog.Title>
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
									<Dialog.Close asChild>
										<Button variant="outline">Annuler</Button>
									</Dialog.Close>
									<Button onClick={handleDonation}>Valider le don</Button>
								</div>
							</Dialog.Content>
						</Dialog.Portal>
					</Dialog.Root>

					<div className="flex justify-between items-center mb-4">
						<span className="text-sm text-gray-600">Récents donateurs:</span>
						<div className="flex space-x-2">
							{recentDonors.map((donor, index) => (
								<div key={index} className="flex items-center">
									<Image src="/images/profile.png" alt="Profile Icon" width={20} height={20} />
									<span className="ml-2 text-xs text-gray-500">{donor}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
