'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogTrigger, DialogOverlay, DialogContent, DialogTitle, DialogClose } from '@radix-ui/react-dialog'
import { Button } from './Button'

interface ProjectCardProps {
	association: string
	location: string
	poolAddress: string
	goal: number
	raised: number
	recentDonors?: string[]
	donationAmount: number
	donationValue: string
	imageUrl: string
	title: string
	tag: string
}

export default function ProjectCard({
	association,
	location,
	poolAddress,
	goal,
	raised,
	recentDonors = [],
	donationAmount,
	donationValue,
	imageUrl,
	title,
	tag,
}: ProjectCardProps) {
	const [donationInput, setDonationInput] = useState('0.0')

	const handleDonation = () => {
		console.log(`Don de ${donationInput} AVAX soumis`)
	}

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
					<h3 className="font-bold text-lg">{association}</h3>
					<span className="bg-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full">
						{tag}
					</span>
				</div>

				<div className="mb-4">
					<h4 className="text-lg font-semibold mb-2">{title}</h4>
					<div className="flex items-center mb-2">
						<Image src="/images/wallet.png" alt="Wallet Icon" width={20} height={20} />
						<span className="ml-2 text-sm text-gray-600">{poolAddress}</span>
					</div>
					<div className="flex items-center mb-2">
						<Image src="/images/id-solid.png" alt="Location Icon" width={20} height={20} />
						<span className="ml-2 text-sm text-gray-600">{location}</span>
					</div>
					<div className="flex items-center mb-4">
						<Image src="/images/ava.png" alt="Avalanche Icon" width={30} height={30} />
						<span className="ml-2 font-bold text-lg">{donationAmount} AVAX</span>
						<span className="ml-2 text-sm text-gray-500">({donationValue})</span>
					</div>

					<Dialog>
						<DialogTrigger asChild>
							<Button className="w-full bg-black text-white hover:bg-gray-800 mb-4">
								Faire un don
							</Button>
						</DialogTrigger>

						<DialogOverlay className="fixed inset-0 bg-black opacity-30" />

						<DialogContent className="fixed top-1/2 left-1/2 w-full max-w-md p-6 bg-white rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2">
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
									<Button variant="outline">Annuler</Button>
								</DialogClose>
								<Button onClick={handleDonation}>Valider le don</Button>
							</div>
						</DialogContent>
					</Dialog>
				</div>
			</div>
		</div>
	)
}
