"use client";
import { useState } from 'react';
import { contractABIFactory, contractAddressFactory } from '../constants/factory';
import { useAccount, useWriteContract } from 'wagmi';
import axios from "axios"; // Pour effectuer des requêtes HTTP
import { API_KEY, API_SECRET } from "@/../env" // Importe les clés API depuis le fichier .env
import { Button } from "antd";
interface Company {
	companySiren: string;
	companyName: string;
}

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
			args: [projectName, projectDescription, ipfsDevis, projectAmount, limitDate, longitude, latitude],
			account: address,
		})
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

		// Options pour la requête à Pinata

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

			// Récupère le hash IPFS du fichier uploadé
			const ipfsDevis = response.data.IpfsHash;
			setIpfsDevis("https://gateway.pinata.cloud/ipfs/" + ipfsDevis);
			setSelectedFilePDF(null) // Mets à jour l'état avec le hash
			setProcessing(false);
		} catch (error) {
			console.error("Erreur lors de l'upload sur Pinata:", error);
			alert("Erreur lors de l'upload du fichier.");
		}
	};

	return (
		<>
			<div>
				<label className="block text-sm font-medium">Nom du projet</label>
				<input
					type="text"
					value={projectName}
					onChange={(e) => setProjectName(e.target.value)}
					className="w-full p-2 border rounded"
					required
				/>
			</div>

			<div>
				<label className="block text-sm font-medium">Description du projet</label>
				<textarea
					value={projectDescription}
					onChange={(e) => setProjectDescription(e.target.value)}
					className="w-full p-2 border rounded"
					required
				/>
			</div>

			<div>
				<label className="block text-sm font-medium">Montant cible (en ETH)</label>
				<input
					type="number"
					value={projectAmount}
					onChange={(e) => setProjectAmount(e.target.value)}
					className="w-full p-2 border rounded"
					required
				/>
			</div>

			{/* Latitude and Longitude inputs */}
			<div>
				<label className="block text-sm font-medium">Latitude</label>
				<input
					type="text"
					value={latitude}
					onChange={(e) => setLatitude(e.target.value)}
					className="w-full p-2 border rounded"
					required
				/>
			</div>

			<div>
				<label className="block text-sm font-medium">Longitude</label>
				<input
					type="text"
					value={longitude}
					onChange={(e) => setLongitude(e.target.value)}
					className="w-full p-2 border rounded"
					required
				/>
			</div>

			<div>
				<label className="block text-sm font-medium">Date limite</label>
				<input
					type="date"
					onChange={(e) => setLimitDate(new Date(e.target.value).getTime())}
					className="w-full p-2 border rounded"
					required
				/>
			</div>

			<div>
				<label className="block text-sm font-medium">Ajouter une image</label>
				<input
					type="file"
					accept="image/*"
					onChange={handleFileChange}
					className="w-full p-2 border rounded"
				/>
				<span>{ipfsHash}</span>
				<Button onClick={handleUploadImage} type='primary' disabled={!selectedFile ? true : false} loading={processing && !ipfsHash ? true : false}>Upload to Pinata</Button>
			</div>

			<div>
				<label className="block text-sm font-medium">Ajouter un devis (fichier PDF)</label>
				<input
					type="file"
					accept=".pdf"
					onChange={handleFileChangePDF}
					className="w-full p-2 border rounded"
				/>
				<span>{ipfsDevis}</span>
				<Button onClick={handleUploadDevis} type='primary' disabled={!selectedFilePDF ? true : false} loading={processing && !ipfsHash ? true : false}>Upload to Pinata</Button>
			</div>

			<Button type="primary" onClick={putNumber} className="px-4 py-2 bg-green-500 text-white rounded mt-4">
				Soumettre le projet
			</Button>
		</>
	);
}
