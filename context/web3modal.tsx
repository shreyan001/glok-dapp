'use client'

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '0793c35a8b46aac855d2e132d25aab6a'

// 2. Set chains
const testnet = {
  chainId: 534351,
  name: 'Scroll-Sepolia',
  currency: 'ETH',
  explorerUrl: 'https://sepolia.scrollscan.com',
  rpcUrl: 'https://rpc.ankr.com/scroll_sepolia_testnet/0b4fe2b4e83113862f17408abcdd0ec1dc8541ba6e4d3302198ea510685b4f41'
}

// 3. Create a metadata object
const metadata = {
  name: 'Glok',
  description: 'web3 x AI',
  url: 'http://localhost:3000', // origin must match your domain & subdomain
  icons: ['https://i.ibb.co/dPnQHKH/pngwing-com.png']
}

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: '...', // used for the Coinbase SDK
  defaultChainId: 1, // used for the Coinbase SDK
})

// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [testnet],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true // Optional - false as default
})

export function Web3Modal({ children }) {
  return children
}