"use client";
import { useState } from 'react';
import { contractABIFactory, contractAddressFactory } from '../constants/factory';
import { useAccount, useWriteContract } from 'wagmi';
import axios from "axios"; // Pour effectuer des requêtes HTTP
import { API_KEY, API_SECRET } from "@/../env" // Importe les clés API depuis le fichier .env
import { Button } from "antd";


export default function CreateProjectForm() {
	const [projectName, setProjectName] = useState('');
	const [projectDescription, setProjectDescription] = useState('');
	const [projectAmount, setProjectAmount] = useState('');
	const [latitude, setLatitude] = useState('');
	const [longitude, setLongitude] = useState('');
	const [limitDate, setLimitDate] = useState(0);
	const [selectedFile, setSelectedFile] = useState(null);
	const [selectedFilePDF, setSelectedFilePDF] = useState(null);
	const [ipfsHash, setIpfsHash] = useState("");
	const [ipfsDevis, setIpfsDevis] = useState("");
	const [processing, setProcessing] = useState(false);
	const pinataApiKey = API_KEY; // Remplace par ta clé API
	const pinataSecretApiKey = API_SECRET; // Remplace par ta clé API secrète

	const { address } = useAccount();

	const { data: hash, isPending, error, writeContract } = useWriteContract();

	const putNumber = async () => {
		writeContract({
			address: contractAddressFactory,
			abi: contractABIFactory,
			functionName: "createRequestDonation",
			args: [projectName, projectDescription, ipfsDevis, ipfsHash, projectAmount, limitDate, longitude, latitude],
			account: address,
		})
		console.log(projectName, projectDescription, ipfsDevis, ipfsHash, projectAmount, limitDate, longitude, latitude);
	}


	const handleFileChange = (event) => {
		setSelectedFile(event.target.files[0]);
		console.log(pinataApiKey, pinataSecretApiKey);
	};

	const handleFileChangePDF = (event) => {
		setSelectedFilePDF(event.target.files[0]);
		console.log(pinataApiKey, pinataSecretApiKey);
	};

	const handleUploadImage = async () => {
		if (!selectedFile) {
			alert("Veuillez sélectionner un fichier avant de l'uploader.");
			return;
		}
		setProcessing(true);
		const formData = new FormData();
		formData.append("file", selectedFile);

		const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";

		try {
			const response = await axios.post(url, formData, {
				maxContentLength: "Infinity",
				headers: {
					"Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
					pinata_api_key: pinataApiKey,
					pinata_secret_api_key: pinataSecretApiKey,
				},
			});

			const ipfsHash = response.data.IpfsHash;
			setIpfsHash("https://gateway.pinata.cloud/ipfs/" + ipfsHash);
			setSelectedFile(null);
			setProcessing(false);
		} catch (error) {
			console.error("Erreur lors de l'upload sur Pinata:", error);
			alert("Erreur lors de l'upload du fichier.");
		}
	};

	const handleUploadDevis = async () => {
		if (!selectedFilePDF) {
			alert("Veuillez sélectionner un fichier avant de l'uploader.");
			return;
		}
		setProcessing(true);
		const formData = new FormData();
		formData.append("file", selectedFilePDF); // Ajoute le fichier au FormData

		const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";

		try {
			const response = await axios.post(url, formData, {
				maxContentLength: "Infinity", // Gère les grands fichiers
				headers: {
					"Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
					pinata_api_key: pinataApiKey,
					pinata_secret_api_key: pinataSecretApiKey,
				},
			});

			const ipfsDevis = response.data.ipfsHash;
			setIpfsDevis("https://gateway.pinata.cloud/ipfs/" + ipfsDevis);
			setSelectedFilePDF(null) // Mets à jour l'état avec le hash
			setProcessing(false);
		} catch (error) {
			console.error("Erreur lors de l'upload sur Pinata:", error);
			alert("Erreur lors de l'upload du fichier.");
		}
	};
	return (
		<div className="space-y-6 max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg">
			<h2 className="text-2xl font-semibold text-gray-800">Créer un nouveau projet</h2>

			<div>
				<label className="block text-sm font-medium text-gray-700">Nom du projet</label>
				<input
					type="text"
					value={projectName}
					onChange={(e) => setProjectName(e.target.value)}
					className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
					placeholder="Nom du projet"
					required
				/>
			</div>

			<div>
				<label className="block text-sm font-medium text-gray-700">Description du projet</label>
				<textarea
					value={projectDescription}
					onChange={(e) => setProjectDescription(e.target.value)}
					className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
					placeholder="Description détaillée du projet"
					rows={4}
					required
				/>
			</div>

			<div>
				<label className="block text-sm font-medium text-gray-700">Montant cible (en ETH)</label>
				<input
					type="number"
					value={projectAmount}
					onChange={(e) => setProjectAmount(e.target.value)}
					className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
					placeholder="Montant cible"
					required
				/>
			</div>

			{/* Latitude and Longitude inputs */}
			<div>
				<label className="block text-sm font-medium text-gray-700">Latitude</label>
				<input
					type="text"
					value={latitude}
					onChange={(e) => setLatitude(e.target.value)}
					className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
					placeholder="Latitude"
					required
				/>
			</div>

			<div>
				<label className="block text-sm font-medium text-gray-700">Longitude</label>
				<input
					type="text"
					value={longitude}
					onChange={(e) => setLongitude(e.target.value)}
					className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
					placeholder="Longitude"
					required
				/>
			</div>

			<div>
				<label className="block text-sm font-medium text-gray-700">Date limite</label>
				<input
					type="date"
					onChange={(e) => setLimitDate(new Date(e.target.value).getTime())}
					className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
					required
				/>
			</div>

			<div>
				<label className="block text-sm font-medium text-gray-700">Ajouter une image</label>
				<input
					type="file"
					accept="image/*"
					onChange={handleFileChange}
					className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
				/>
				<span>{ipfsHash}</span>
				<Button onClick={handleUploadImage} type='primary' disabled={!selectedFile ? true : false} loading={processing && !ipfsHash ? true : false}>Upload to Pinata</Button>
			</div>

			<div>
				<label className="block text-sm font-medium text-gray-700">Ajouter un devis (fichier PDF)</label>
				<input
					type="file"
					accept=".pdf"
					onChange={handleFileChangePDF}
					className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
				/>
				<span>{ipfsDevis}</span>
				<Button onClick={handleUploadDevis} type='primary' disabled={!selectedFilePDF ? true : false} loading={processing && !ipfsDevis ? true : false}>Upload to Pinata</Button>
			</div>

			<Button type="primary" onClick={putNumber} className="px-4 py-2 bg-green-500 text-white rounded mt-4">
				Soumettre le projet
			</Button>
		</div>
	);
}
