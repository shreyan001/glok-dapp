export const ResearchDocumentMarketABI = 
	
	[
		{
			"inputs": [
				{
					"internalType": "bytes32",
					"name": "docHash",
					"type": "bytes32"
				}
			],
			"name": "accessDocument",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "bytes32",
					"name": "docHash",
					"type": "bytes32"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "user",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amountPaid",
					"type": "uint256"
				}
			],
			"name": "DocumentAccessPayment",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "bytes32",
					"name": "docHash",
					"type": "bytes32"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "author",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "pricePerWord",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "totalWords",
					"type": "uint256"
				}
			],
			"name": "DocumentUploaded",
			"type": "event"
		},
		{
			"inputs": [
				{
					"internalType": "bytes32",
					"name": "docHash",
					"type": "bytes32"
				},
				{
					"internalType": "uint256",
					"name": "_pricePerWord",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_totalWords",
					"type": "uint256"
				}
			],
			"name": "uploadDocument",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "withdrawEarnings",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"name": "authorEarnings",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "bytes32",
					"name": "",
					"type": "bytes32"
				}
			],
			"name": "documents",
			"outputs": [
				{
					"internalType": "address",
					"name": "author",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "pricePerWord",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "totalWords",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	]
	