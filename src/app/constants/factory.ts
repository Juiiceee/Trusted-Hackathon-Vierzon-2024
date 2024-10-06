export const contractAddressFactory = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
export const contractABIFactory = [
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
				"internalType": "string",
				"name": "_ProjectImage",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_ProjectAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_LimiteDate",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_Longitude",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Latitude",
				"type": "string"
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
				"internalType": "string",
				"name": "ProjectImage",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ProjectAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "alreadypaid",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "RequestAdress",
				"type": "address"
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
			},
			{
				"internalType": "string",
				"name": "Longitude",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Latitude",
				"type": "string"
			},
			{
				"internalType": "enum State.Status",
				"name": "status",
				"type": "uint8"
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
	}
]