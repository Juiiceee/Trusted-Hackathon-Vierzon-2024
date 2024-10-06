import { useState } from 'react';
import { Button } from './Button';

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
    selectedCompanies: { companySiren: string, requestAmount: string }[];
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
  const [selectedCompanies, setSelectedCompanies] = useState<{ companySiren: string; requestAmount: string }[]>([]);
  const [projectImage, setProjectImage] = useState<File | null>(null); 
  const [projectDevis, setProjectDevis] = useState<File | null>(null); 

  const addCompany = () => {
    setSelectedCompanies([...selectedCompanies, { companySiren: '', requestAmount: '' }]);
  };

  const handleCompanyChange = (index: number, field: string, value: string) => {
    const updatedCompanies = [...selectedCompanies];
    updatedCompanies[index] = {
      ...updatedCompanies[index],
      [field]: value,
    };
    setSelectedCompanies(updatedCompanies);
  };

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

    // Réinitialiser le formulaire
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
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg">
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
          value={limitDate}
          onChange={(e) => setLimitDate(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Ajouter une image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setProjectImage(e.target.files ? e.target.files[0] : null)}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Ajouter un devis (fichier PDF)</label>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setProjectDevis(e.target.files ? e.target.files[0] : null)}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
      </div>

      {/* Dynamic list of companies with SIREN input */}
      <div>
        <h3 className="text-sm font-medium text-gray-700">Entreprises prestataires</h3>
        {selectedCompanies.map((company, index) => (
          <div key={index} className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Numéro SIREN</label>
              <input
                type="text"
                value={company.companySiren}
                onChange={(e) => handleCompanyChange(index, 'companySiren', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                placeholder="SIREN de l'entreprise"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Montant demandé</label>
              <input
                type="number"
                value={company.requestAmount}
                onChange={(e) => handleCompanyChange(index, 'requestAmount', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                placeholder="Montant demandé"
                required
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addCompany}
          className="px-4 py-2 bg-gray-100 text-gray-700 border border-gray-300 rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          Ajouter une entreprise
        </button>
      </div>

      <Button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors border-2 border-transparent hover:border-purple-500">
              Faire un don
      </Button>
    </form>
  );
}
