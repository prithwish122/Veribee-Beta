import { cookieStorage, createStorage, http } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, arbitrum, defineChain } from '@reown/appkit/networks'
import { custom } from 'zod'
import { createAppKit } from '@reown/appkit'

// Get projectId from https://dashboard.reown.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) {
  throw new Error('Project ID is not defined')
}

// const customNetwork = defineChain({
//   id: 97,
//   caipNetworkId: 'eip155:123456789',
//   chainNamespace: 'eip155',
//   name: 'BNB Testnet',
//   nativeCurrency: {
//     decimals: 18,
//     name: 'BNB TESTNET',
//     symbol: 'BNB',
//   },
//   rpcUrls: {
//     default: {
//       http: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
//       webSocket: ['WS_RPC_URL'],
//     },
//   },
//   blockExplorers: {
//     default: { name: 'Explorer', url: 'https://testnet.bscscan.com' },
//   },
//   contracts: {
//     // Add the contracts here
//   }
// })

const customNetwork = defineChain({
  id: 656476,
  caipNetworkId: 'eip155:123456789',
  chainNamespace: 'eip155',
  name: 'EDU Chain Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'EDU',
    symbol: 'EDU',
  },
  rpcUrls: {
    default: {
      http: ['https://open-campus-codex-sepolia.drpc.org'],
      webSocket: [''],
    },
  },
  blockExplorers: {
    default: {
      name: 'Core Testnet Explorer',
      url: 'https://opencampus-codex.blockscout.com',
    },
  },
  contracts: {
    // Add your contracts here if any
  },
})

// Define networks before using them
export const networks = [mainnet, arbitrum, customNetwork]

// Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId,
  networks
})

// Now use wagmiAdapter in createAppKit
const modal = createAppKit({
  adapters: [wagmiAdapter], // Add valid adapter objects here if needed
  networks: [customNetwork],
  chainImages: {
    123456789: 'https://s2.coinmarketcap.com/static/img/coins/200x200/23254.png',
  },
  projectId: '147ac26d4875d31fbecca54c782a112d',
})

export const config = wagmiAdapter.wagmiConfig