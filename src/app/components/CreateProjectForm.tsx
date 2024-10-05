import { useState } from 'react';

interface Company {
  companySiren: string;
  companyName: string;
}

interface CreateProjectFormProps {
  companies: Company[];
  onSubmit: (project: {
    projectName: string;
    projectDescription: string;
    projectQuote: string;
    projectAmount: string;
    latitude: string;
    longitude: string;
    limitDate: string;
    selectedCompanies: { companyName: string, requestAmount: string }[];
    projectImage: File | null;
    projectDevis: File | null;
  }) => void;
}

export default function CreateProjectForm({ companies, onSubmit }: CreateProjectFormProps) {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectAmount, setProjectAmount] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [limitDate, setLimitDate] = useState('');
  const [selectedCompanies, setSelectedCompanies] = useState<{ companyName: string; requestAmount: string }[]>([]);
  const [projectImage, setProjectImage] = useState<File | null>(null); 
  const [projectDevis, setProjectDevis] = useState<File | null>(null); 

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    onSubmit({
      projectName,
      projectDescription,
      projectQuote: 'Devis attaché',
      projectAmount,
      latitude,
      longitude,
      limitDate,
      selectedCompanies,
      projectImage,
      projectDevis,
    });

    setProjectName('');
    setProjectDescription('');
    setProjectAmount('');
    setLatitude('');
    setLongitude('');
    setLimitDate('');
    setSelectedCompanies([]);
    setProjectImage(null);
    setProjectDevis(null);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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

      {/* Latitude and Longitude inputs with constraints */}
      <div>
        <label className="block text-sm font-medium">Latitude (entre -90 et 90)</label>
        <input
          type="number"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          min="-90"
          max="90"
          step="0.000001"
          className="w-full p-2 border rounded"
          placeholder="Ex: 48.8566"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Longitude (entre -180 et 180)</label>
        <input
          type="number"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          min="-180"
          max="180"
          step="0.000001"
          className="w-full p-2 border rounded"
          placeholder="Ex: 2.3522"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Date limite</label>
        <input
          type="date"
          value={limitDate}
          onChange={(e) => setLimitDate(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Ajouter une image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setProjectImage(e.target.files ? e.target.files[0] : null)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Ajouter un devis (fichier PDF)</label>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setProjectDevis(e.target.files ? e.target.files[0] : null)}
          className="w-full p-2 border rounded"
        />
      </div>

      <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded mt-4">
        Soumettre le projet
      </button>
    </form>
  );
}
