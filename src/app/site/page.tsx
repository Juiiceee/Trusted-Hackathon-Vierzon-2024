  import Image from 'next/image';
  import { Button } from "../components/Button";

  interface ProjectCardProps {
    association: string;
    location: string;
    poolAddress: string;
    goal: number;
    raised: number;
    recentDonors: string[];
    donationAmount: number;
    donationValue: string;
    imageUrl: string; // Ajout d'un champ pour l'image de chaque carte
    title: string; // Titre principal
    tag: string; // Tag pour le projet
  }
  
  function ProjectCard({
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
            src={imageUrl} // Image spécifique par carte
            alt="Project Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">{association}</h3>
            <span className="bg-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full">
              {tag} {/* Affichage du tag */}
            </span>
          </div>
  
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">{title}</h4> {/* Titre principal */}
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


  export default function SitePage() {
    return (
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Hero Section */}
        <section className="relative h-screen">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="w-full md:w-1/2 space-y-6 z-10">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                La <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-orange-400">Transparence</span> 
                <br />dans chaque donation
              </h1>
              <p className="text-3xl md:text-5xl font-bold leading-tight">
                propulsée par la technologie blockchain
              </p>
              <Button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors border-2 border-transparent hover:border-purple-500">
                Faire un don
              </Button>
              <div className="flex flex-wrap gap-2 mt-4">
                {['Donations blockchain', 'Dons sécurisés', 'Impact social blockchain', 'Transparence des dons'].map((tag) => (
                  <span key={tag} className="bg-white bg-opacity-50 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Frame31 background image */}
          <div className="absolute right-0 top-[332px] w-[1425px] h-[546px] z-0">
            <Image
              src="/images/Frame31.png"
              alt="Background frame"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          
          {/* Group1 image */}
          <div className="absolute right-[10%] lg:right-[10%] top-[20%] w-[500px] h-[471px] z-20">
            <Image
              src="/images/Group1.png"
              alt="Smiling child"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </section>

        {/* Project Cards Section */}
        <section className="py-[1%] bg-white-100"> {/* Ajout de 10% de padding en haut et en bas */}
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-[2%] text-center">Ils ont besoin de vous</h2> {/* Ajout de 10% de padding */}
            <h2 className="text-3xl font-bold mb-[5%] text-center">Projets en cours</h2> {/* Ajout de 10% de padding */}
            <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Première carte */}
            <ProjectCard
              association="Association 1"
              location="99 Rte de M, 72530 Yvre l'Eveque"
              poolAddress="0x5353TEFHUO48653OHFHPOHDNL1HF1"
              goal={10}
              raised={5}
              recentDonors={['0x5353TEFHUO48653OHFHPOHDNL1HF1']}
              donationAmount={0.1}
              donationValue="$242.49"
              imageUrl="/images/exemple.png" // Image spécifique pour cette carte
              title="Construction d'une école pour des enfants défavorisés" // Nouveau titre
              tag="Construire une école" // Nouveau tag
            />

            {/* Deuxième carte */}
            <ProjectCard
              association="Association 2"
              location="75 Rue de la République, 75000 Paris"
              poolAddress="0x98ERD45678EFD341R9874TER2349RHJKL"
              goal={20}
              raised={12}
              recentDonors={['0x4564EFHUO4567EFDGFDRYDR7890LFJX']}
              donationAmount={0.15}
              donationValue="$364.99"
              imageUrl="/images/exemple.png" // Image spécifique pour cette carte
              title="Construction d'une école pour des enfants défavorisés" // Nouveau titre
              tag="Construire une école" // Nouveau tag
            />

            {/* Troisième carte */}
            <ProjectCard
              association="Association 3"
              location="23 Boulevard des Capucines, 75009 Paris"
              poolAddress="0x12FDERO8765EDDERF1234ERQWE456EFGH"
              goal={15}
              raised={7.5}
              recentDonors={['0x98765RTERF12345678901']}
              donationAmount={0.25}
              donationValue="$605.99"
              imageUrl="/images/Group1.png" // Image spécifique pour cette carte
              title="Construction d'une école pour des enfants défavorisés" // Nouveau titre
              tag="Construire une école" // Nouveau tag
            />

            {/* Quatrième carte */}
            <ProjectCard
              association="Association 4"
              location="43 Avenue des Champs-Élysées, 75008 Paris"
              poolAddress="0xA12FDERO45678EDDRRG456ETREWE234F"
              goal={30}
              raised={18}
              recentDonors={['0x45HYUO768REWQEFRTYGFD']}
              donationAmount={0.5}
              donationValue="$1200.00"
              imageUrl="/images/exemple.png" // Image spécifique pour cette carte
              title="Construction d'une école pour des enfants défavorisés" // Nouveau titre
              tag="Construire une école" // Nouveau tag
            />
          </div>
              </div>
            </div>
          </section>
        </div>
      );
    }
