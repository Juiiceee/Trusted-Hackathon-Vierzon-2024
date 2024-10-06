'use client';

import { useState } from 'react';
import ProjectCard from "../components/ProjectCard"; // Import du composant ProjectCard
import SearchBar from "../components/SearchBar"; // Import du composant SearchBar
import { contractABIFactory, contractAddressFactory } from '../constants/factory';

// Simple Badge component for manual styles
import { ReactNode, MouseEventHandler } from 'react';
import { Description } from '@radix-ui/react-dialog';
import { useReadContract } from 'wagmi';
import { read } from 'fs';

interface BadgeProps {
	children: ReactNode;
	isActive: boolean;
	onClick: MouseEventHandler<HTMLSpanElement>;
}

const Badge = ({ children, isActive, onClick }: BadgeProps) => (
	<span
		onClick={onClick}
		className={`cursor-pointer px-3 py-1 rounded-full text-sm font-semibold ${isActive ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-800'
			}`}
	>
		{children}
	</span>
);

let projects = [
	{
		nom: "Les Enfants du Soleil",
		latitude: 47.9975,  // Coordonnées réalistes
		longitude: 0.1936,
		poolAddress: "0x5353TEFHUO48653OHFHPOHDNL1HF1",
		goal: 100, // Objectif réaliste en AVAX
		raised: 45, // Montant déjà collecté
		recentDonors: ['0x5353TEFHUO48653OHFHPOHDNL1HF1', '0x2A3B4C5D6E7F8901AB2C'],
		donationAmount: 0.1,
		donationValue: "$10.24", // Conversion réaliste en dollars
		imageUrl: "/images/exemple.png",
		description: "Construction d'une école pour enfants défavorisés",
		tag: "Construction",
	  },
	{
		nom: "Handicap International",
		latitude: 48.8566,
		longitude: 2.3522,
		poolAddress: "0x98ERD45678EFD341R9874TER2349RHJKL",
		goal: 200, // Objectif réaliste en AVAX
		raised: 120,
		recentDonors: ['0x4564EFHUO4567EFDGFDRYDR7890LFJX', '0x1234567890ABCDEF1234'],
		donationAmount: 0.15,
		donationValue: "$15.36",
		imageUrl: "/images/exemple.png",
		description: "Rénovation d'un centre pour personnes handicapées",
		tag: "Rénovation",
	},
	{
		nom: "Banques Alimentaires",
		latitude: 48.8704,
		longitude: 2.3318,
		poolAddress: "0x12FDERO8765EDDERF1234ERQWE456EFGH",
		goal: 150,
		raised: 75,
		recentDonors: ['0x98765RTERF12345678901', '0x5B6C7D8E9F1234567890'],
		donationAmount: 0.25,
		donationValue: "$25.60",
		imageUrl: "/images/Group1.png",
		description: "Programme d'aide alimentaire pour les sans-abris",
		tag: "Aide alimentaire",
	},
	{
		nom: "Fondation pour l'Éducation",
		latitude: 48.8683,
		longitude: 2.3050,
		poolAddress: "0xA12FDERO45678EDDRRG456ETREWE234F",
		goal: 300,
		raised: 180,
		recentDonors: ['0x45HYUO768REWQEFRTYGFD', '0x1234ABCDE67890'],
		donationAmount: 0.5,
		donationValue: "$50.00",
		imageUrl: "/images/exemple.png",
		description: "Programme de bourses pour étudiants en difficulté",
		tag: "Scholarship",
	},
];

// Liste des projets (avec latitude et longitude au lieu de locatio

export default function DonationMarketplace() {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedTag, setSelectedTag] = useState("");

	const { data: readOne, refetch: refetchOne } = useReadContract({
		address: contractAddressFactory,
		abi: contractABIFactory,
		functionName: "getRequestDonation",
		args: [0],
	});

	const { data: readTwo, refetch: refetchTwo } = useReadContract({
		address: contractAddressFactory,
		abi: contractABIFactory,
		functionName: "getRequestDonation",
		args: [1],
	});

	const { data: readThree, refetch: refetchThree } = useReadContract({
		address: contractAddressFactory,
		abi: contractABIFactory,
		functionName: "getRequestDonation",
		args: [2],
	});
	const { data: readFour, refetch: refetchFour } = useReadContract({
		address: contractAddressFactory,
		abi: contractABIFactory,
		functionName: "getRequestDonation",
		args: [3],
	});
	const print = () => {
		refetchOne();
		console.log(readOne[9]);
	};

	// Filtrer les projets par tag et par recherche
	// const filteredProjects = projects.filter((project) =>
	// 	(selectedTag === "" || project.tag === selectedTag) &&
	// 	(project.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
	// 		(project.description?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false))
	// );

	// Extraire les tags uniques des projets
	//const tags = Array.from(new Set(projects.map((project) => project.tag)));

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-4xl font-bold mb-8 text-center">Nos projets caritatifs</h1>

			{/* Barre de recherche */}
			<div className="mb-8">
				<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			</div>
			<button onClick={print}>salut</button>

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
					{/* {tags.map((tag) => (
						<Badge
							key={tag}
							isActive={selectedTag === tag}
							onClick={() => setSelectedTag(tag)}
						>
							{tag}
						</Badge>
					))} */}
				</div>
			</div>

			{/* Affichage des cartes filtrées */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{/* {filteredProjects.map((project, index) => (
					<ProjectCard key={index} {...project} latitude={project.latitude.toString()} longitude={project.longitude.toString()} />
				))} */}
				{readOne && <ProjectCard
					nom={readOne[0]}
					latitude= {readOne[9]} // Coordonnées géographiques au lieu de location
					longitude={readOne[8]}
					poolAddress="0x5353TEFHUO48653OHFHPOHDNL1HF1"
					goal={readOne[3]}
					raised={5}
					recentDonors={['0x5353TEFHUO48653OHFHPOHDNL1HF1']}
					donationAmount={0.1}
					donationValue="$242.49"
					imageUrl="/images/exemple.png"
					description={readOne[1]}
					tag="Construire une école" />}
				{readTwo && <ProjectCard
					nom={readTwo[0]}
					latitude={readTwo[9]} // Coordonnées géographiques au lieu de location
					longitude={readTwo[8]}
					poolAddress="0x98ERD45678EFD341R9874TER2349RHJKL"
					goal={readTwo[3]}
					raised={10}
					recentDonors={['0x4564EFHUO4567EFDGFDRYDR7890LFJX']}
					donationAmount={0.15}
					donationValue="$15.36"
					imageUrl="/images/exemple.png"
					description={readTwo[1]}
					tag="Rénovation" />}

				{readThree && <ProjectCard
					nom={readThree[0]}
					latitude={readThree[9]} // Coordonnées géographiques au lieu de location
					longitude={readThree[8]}
					poolAddress="0x12FDERO8765EDDERF1234ERQWE456EFGH"
					goal={readThree[3]}
					raised={15}
					recentDonors={['0x98765RTERF12345678901']}
					donationAmount={0.25}
					donationValue="$25.60"
					imageUrl="/images/Group1.png"
					description={readThree[1]}
					tag="Aide alimentaire" />}

				{readFour && <ProjectCard
					nom={readFour[0]}
					latitude={readFour[9]} // Coordonnées géographiques au lieu de location
					longitude={readFour[8]}
					poolAddress="0xA12FDERO45678EDDRRG456ETREWE234F"
					goal={readFour[3]}
					raised={20}
					recentDonors={['0x45HYUO768REWQEFRTYGFD']}
					donationAmount={0.5}
					donationValue="$50.00"
					imageUrl="/images/exemple.png"
					description={readFour[1]}
					tag="Scholarship" />}
			</div>

			{/* Message si aucun projet ne correspond à la recherche ou au tag */}
			{/* {filteredProjects.length === 0 && (
				<p className="text-center mt-8 text-lg">Aucun projet ne correspond à votre recherche.</p>
			)} */}
		</div>
	);
}
