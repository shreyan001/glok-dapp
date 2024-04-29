"use client";
import React, { useState } from 'react';
import { Contract, ethers } from 'ethers';
import { ResearchDocumentMarketABI } from '@/contract/ResearchDocumentMarketABI';
import { BrowserProvider } from 'ethers';
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers/react';

interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  sourceData: {
    documentHash: string;
    pricePerWord: number;
    numberOfWords: number;
  };
}

const TransactionModal: React.FC<TransactionModalProps> = ({ isOpen, onClose, sourceData }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abi = ResearchDocumentMarketABI;
  const { walletProvider } = useWeb3ModalProvider();

  const handlePurchase = async () => {
    try {
      console.log(walletProvider);
      const ethersProvider = new BrowserProvider(walletProvider);
      const signer = await ethersProvider.getSigner();

      // Replace 'contractAddress' with your contract address
      const contractAddress = '0x6ee2e3fefdecb505d7f1de61281babe920f8b8e4'; // Replace with your contract address
      const contract = new Contract(contractAddress, abi, signer);

      // Calculate payment amount
      const pricePerWord =  sourceData.pricePerWord;
      const amountToPay =  pricePerWord * wordCount;

      // Call contract method to access document
      setLoading(true);
      await contract.accessDocument(sourceData.documentHash,  { value: amountToPay });
      // Payment successful, close modal
      setLoading(false);
      onClose();
    } catch (error) {
      // Handle error
      setLoading(false);
      setError(error.message || 'An error occurred');
    }
  };


  const renderModalContent = () => (
    <div className='fixed inset-0 overflow-y-auto z-50 bg-gray-200 bg-opacity-50'>
      <div className="modal-content bg-white w-1/2 mx-auto my-20 p-8 rounded-lg shadow-lg">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold">Unlock Content</h2>
          <p className="text-gray-600">{`This content contains ${sourcnumberOfWordseData?.} words. To unlock, you need to pay.`}</p>
        </div>
        <div className="flex justify-center">
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handlePurchase}
            disabled={loading}
          >
            {loading ? 'Purchasing...' : 'Purchase'}
          </button>
        </div>
        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
      </div>
    </div>
  );

  return (<div>
    {isOpen && renderModalContent()}
 </div> );
};

export default TransactionModal;

