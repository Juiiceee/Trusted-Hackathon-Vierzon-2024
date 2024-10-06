import { type Chain } from 'viem'

export const Trusted = {
  id: 4242,
  name: 'Trusted',
  nativeCurrency: { name: 'trusted', symbol: 'TRU', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://friendly-palm-tree-q59qr6wgpx5c64vj-9650.app.github.dev/ext/bc/Trusted/rpc'] },
  },
  contracts: {},
} as const satisfies Chain