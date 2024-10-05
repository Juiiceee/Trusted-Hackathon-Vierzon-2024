export const contractRequestDonationAddress =
  "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

export const contractRequestDonationAbi =  [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_sbtContractAddress",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "SIRENToCompagny",
		"outputs": [
			{
				"internalType": "string",
				"name": "CompagnyName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "CompagnySIREN",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "RequestAmount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "CompagnyAddress",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_SIREN",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "addCompagnyToRequestDonation",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_CompagnyName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_CompagnySIREN",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_RequestAmount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_CompagnyAddress",
				"type": "address"
			}
		],
		"name": "createCompagny",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_ProjectName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_ProjectDescription",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_ProjectQuote",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_ProjectAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_CreationDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_LimiteDate",
				"type": "uint256"
			}
		],
		"name": "createRequestDonation",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getNbCompagny",
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
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getRequestDonation",
		"outputs": [
			{
				"internalType": "string",
				"name": "ProjectName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ProjectDescription",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ProjectQuote",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ProjectAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "CreationDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "LimiteDate",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "CompagnyName",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "CompagnySIREN",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "RequestAmount",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "CompagnyAddress",
						"type": "address"
					}
				],
				"internalType": "struct compagny.compagnyInfo[]",
				"name": "Companies",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "id",
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "idToRequestDonation",
		"outputs": [
			{
				"internalType": "contract RequestDonation",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sbtContract",
		"outputs": [
			{
				"internalType": "contract DonationSBT",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];