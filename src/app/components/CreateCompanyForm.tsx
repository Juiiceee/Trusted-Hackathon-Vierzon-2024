import { useState } from 'react';

interface CreateCompanyFormProps {
  onSubmit: (data: { companyName: string; companySiren: string; companyAddress: string }) => void;
}

export default function CreateCompanyForm({ onSubmit }: CreateCompanyFormProps) {
  const [companyName, setCompanyName] = useState('');
  const [companySiren, setCompanySiren] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    onSubmit({
      companyName,
      companySiren,
      companyAddress,
    });
    setCompanyName('');
    setCompanySiren('');
    setCompanyAddress('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Nom de l'entreprise</label>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">SIREN de l'entreprise</label>
        <input
          type="number"
          value={companySiren}
          onChange={(e) => setCompanySiren(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Adresse Ethereum</label>
        <input
          type="text"
          value={companyAddress}
          onChange={(e) => setCompanyAddress(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        Créer l'entreprise
      </button>
    </form>
  );
}
