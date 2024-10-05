"use client";

import { useState } from 'react';
import CreateCompanyForm from '../components/CreateCompanyForm'; // Formulaire d'entreprise
import CreateProjectForm from '../components/CreateProjectForm'; // Formulaire de projet

const companiesMock = [
  // Liste d'exemple d'entreprises enregistrées, à remplacer par des données réelles
  { companyName: 'Entreprise A', companySiren: '123456789', companyAddress: '0x123' },
  { companyName: 'Entreprise B', companySiren: '987654321', companyAddress: '0x456' },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('entreprise'); // Tab actif
  const [companies, setCompanies] = useState(companiesMock); // Entreprises enregistrées
  
  // Gestion de la soumission des formulaires
  const handleCompanySubmit = (newCompany: { companyName: string; companySiren: number; companyAddress: string; }) => {
    // setCompanies([...companies, newCompany]);
    // alert('Entreprise créée avec succès !');
  };    

  const handleProjectSubmit = (newProject: any) => {
    console.log('Projet soumis :', newProject);
    alert('Projet soumis avec succès !');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-3xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Plateforme de Don</h1>
        
        {/* Onglets */}
        <div className="flex space-x-4 justify-center mb-6">
          <button
            className={`px-4 py-2 rounded-t-lg ${
              activeTab === 'entreprise' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-600'
            }`}
            onClick={() => setActiveTab('entreprise')}
          >
            Créer une entreprise
          </button>
          <button
            className={`px-4 py-2 rounded-t-lg ${
              activeTab === 'projet' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-600'
            }`}
            onClick={() => setActiveTab('projet')}
          >
            Soumettre un projet
          </button>
        </div>

        {/* Contenu des onglets */}
        <div className="p-6 bg-white shadow-md rounded-b-lg">
          {activeTab === 'entreprise' && (
            <CreateCompanyForm onSubmit={handleCompanySubmit} />
          )}
          {activeTab === 'projet' && (
            <CreateProjectForm companies={companies} onSubmit={handleProjectSubmit} />
          )}
        </div>
      </div>
    </div>
  );
}
