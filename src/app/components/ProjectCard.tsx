// src/components/ProjectCard.tsx
import Image from 'next/image';
import { Button } from "./Button"; // Si le bouton est aussi dans "components"

interface ProjectCardProps {
  association: string;
  location: string;
  poolAddress: string;
  goal: number;
  raised: number;
  recentDonors: string[];
  donationAmount: number;
  donationValue: string;
  imageUrl: string;
  title: string;
  tag: string;
}

export default function ProjectCard({
  association,
  location,
  poolAddress,
  goal,
  raised,
  recentDonors,
  donationAmount,
  donationValue,
  imageUrl,
  title,
  tag,
}: ProjectCardProps) {
  const progress = (raised / goal) * 100;

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

          <Button className="w-full bg-black text-white hover:bg-gray-800 mb-4">
            Faire un don
          </Button>

          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-600">Récents donateurs:</span>
            <div className="flex space-x-2">
              {recentDonors.map((donor, index) => (
                <div key={index} className="flex items-center">
                  <Image src="/images/profile.png" alt="Profile Icon" width={20} height={20} />
                  <span className="ml-2 text-xs text-gray-500">{donor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
