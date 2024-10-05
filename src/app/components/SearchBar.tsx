// src/components/SearchBar.tsx
interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
  }
  
  export default function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
    return (
      <div className="w-full">
        <input
          type="text"
          placeholder="Rechercher un projet..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
    );
  }
  