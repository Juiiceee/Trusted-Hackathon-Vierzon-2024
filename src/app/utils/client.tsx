import { createPublicClient, http } from "viem";

import { defineChain } from 'viem'

// Définition de la chaîne Anvil
export const anvilChain = defineChain({
  id: 31337,
  name: 'Anvil',
  network: 'anvil',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { 
      http: ['http://localhost:8545'],
    },
    public: { 
      http: ['http://localhost:8545'],
    },
  },
})

// Création du client public
export const publicClient = createPublicClient({
  chain: anvilChain,
  transport: http(),
});