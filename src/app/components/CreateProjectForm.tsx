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
  const [limitDate, setLimitDate] = useState('');
  const [selectedCompanies, setSelectedCompanies] = useState<{ companyName: string; requestAmount: string }[]>([]);
  const [projectImage, setProjectImage] = useState<File | null>(null); // Fichier image
  const [projectDevis, setProjectDevis] = useState<File | null>(null); // Fichier devis

  // Ajout d'une entreprise
  const addCompany = () => {
    setSelectedCompanies([...selectedCompanies, { companyName: '', requestAmount: '' }]);
  };

  // Gestion des changements dans les champs d'entreprise
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
      projectQuote: 'Devis attaché', // Valeur fictive si devis n'est pas défini comme texte
      projectAmount,
      limitDate,
      selectedCompanies,
      projectImage,
      projectDevis,
    });
    // Reset des champs
    setProjectName('');
    setProjectDescription('');
    setProjectAmount('');
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

      {/* Ajouter une image */}
      <div>
        <label className="block text-sm font-medium">Ajouter une image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setProjectImage(e.target.files ? e.target.files[0] : null)}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Ajouter un devis */}
      <div>
        <label className="block text-sm font-medium">Ajouter un devis (fichier PDF)</label>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setProjectDevis(e.target.files ? e.target.files[0] : null)}
          className="w-full p-2 border rounded"
        />
      </div>
       {/* Entreprises participantes */}

      {/* Bouton pour ajouter une nouvelle entreprise */}

      {/* Soumettre le projet */}
      <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded mt-4">
        Soumettre le projet
      </button>
    </form>
  );
}
