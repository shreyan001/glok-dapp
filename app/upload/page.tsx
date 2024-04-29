"use client"
import { useState,ChangeEvent,FormEvent } from 'react';
import { BrowserProvider, Contract,formatUnits } from 'ethers'
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers/react'
import { ResearchDocumentMarketABI } from '@/contract/ResearchDocumentMarketABI';
import crypto from 'crypto';


export default function UploadDocument() {
    const [pricePerWord, setPricePerWord] = useState('');
    const [totalWords, setTotalWords] = useState('4000');
    const [file, setFile] = useState<File | null>(null);
    const [dataAdd, setDataAdd] = useState ('0xc0ffee254729296a45a3885639AC7E10F9d54979');
    const { address, chainId, isConnected } = useWeb3ModalAccount()
    const { walletProvider } = useWeb3ModalProvider()
    const abi = ResearchDocumentMarketABI;
    function generateRandomHash() {
      const randomData = crypto.randomBytes(32); // Generate 32 random bytes (256 bits)
      const hash = crypto.createHash('sha256').update(randomData).digest('hex');
      return '0x' + hash; // Prefixing '0x' to denote a hexadecimal string
    }
 

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target.files?.[0];
      if (selectedFile) {
        setFile(selectedFile);
      }
    };

    
    const handleUploadSubmit = async () => {
    
      const formData = new FormData(); 
      formData.set('author_address',address);
      formData.set('pdfFile', file);
      formData.set('nft_address', dataAdd); 
      formData.set('cost_per_word',pricePerWord);
    
    
      try {
        const response = await fetch('/api/document_upload', {
          method: 'POST',
          body: formData,
        });
    
        const data = await response.json(); // Parse the response as JSON
        console.log('Content uploaded successfully:', data);
        // Clear the form or handle success state (optional)
      } catch (error) {
        console.error('Error uploading content:', error);
      }
    };
    
  
    const handleSubmit = async () => {
  
      if (!file) {
        console.error('No file selected');
        return;
      }
  
      const data = new FormData();
      data.set('pdfFile', file);
  
      try {
        const response = await fetch('/api/loader', {
          method: 'POST',
          body: data,
        });
        if (response.ok) {
          console.log('File uploaded successfully');
        } else {
          console.error('File upload failed');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    };


    const handleUploadDocument = async () => {
        try {
            console.log(walletProvider)
            const ethersProvider = new BrowserProvider(walletProvider)
            const signer = await ethersProvider.getSigner();
            const contractAddress = '0x4366808982cE144Ce1c6864ae40F4ED06ddA06f5'; // Replace with your contract address
            const contract = new Contract(contractAddress, abi , signer);
            const documentHash = generateRandomHash();
            await contract.uploadDocument(documentHash, parseInt(pricePerWord), parseInt(totalWords));
            console.log("reached here");
            await handleSubmit();
            await handleUploadSubmit();
            alert('Document Registered successfully!');
            setPricePerWord('');
            setTotalWords('');
        } catch (error) {
            console.error(error);
            alert('Error uploading document. Please try again.');
        }
    };

    
    return (
        <div>
            <div className="flex flex-col items-center justify-center pt-10 m-3 h-[100%]">
            <input type="file" className="file-input file-input-bordered w-full max-w-xs mt-10" accept=".pdf" onChange={handleFileChange} />
            <div className="w-full max-w-xs flex flex-col gap-3 mt-5">
                <input className="input input-bordered" type="number" placeholder="Price Per Word" value={pricePerWord} onChange={(e) => setPricePerWord(e.target.value)} />
                <input className="input input-bordered" type="number" placeholder="Total Words" value={totalWords} onChange={(e) => setTotalWords(e.target.value)} />
            </div>
            <button className="btn btn-primary mt-5" onClick={handleUploadDocument}>Upload Document</button>
        </div>
        </div>
    );
}
