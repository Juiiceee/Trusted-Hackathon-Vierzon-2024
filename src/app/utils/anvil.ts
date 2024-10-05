const RPC = process.env.NEXT_PUBLIC_ANVIL_RPC || "http://127.0.0.1:8545";

export const anvil = {
    id: 31337,
    name: 'Anvil',
    nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
      default: {
        http: [RPC],
      },
    },
    blockExplorers: {
      default: {
        name: 'Local Explorer',
        url: 'http://localhost:8545', // Anvil n'a pas d'explorateur de blocs par défaut
      },
    },
    contracts: {
      // Anvil n'a pas de contrats prédéployés comme multicall3 par défaut
      // Vous pouvez les ajouter manuellement si vous les déployez vous-même
    },
    testnet: true,
    estimatedBlockTime: 1, // Anvil produit des blocs instantanément
}