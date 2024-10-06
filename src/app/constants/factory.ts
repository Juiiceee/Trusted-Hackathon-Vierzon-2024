export const contractAddressFactory = "0x52C84043CD9c865236f11d9Fc9F56aa003c1f922";
export const contractABIFactory = [
	{
		"type": "function",
		"name": "SIRENToCompagny",
		"inputs": [
			{
				"name": "",
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"outputs": [
			{
				"name": "CompagnyName",
				"type": "string",
				"internalType": "string"
			},
			{
				"name": "CompagnySIREN",
				"type": "uint256",
				"internalType": "uint256"
			},
			{
				"name": "RequestAmount",
				"type": "uint256",
				"internalType": "uint256"
			},
			{
				"name": "CompagnyAddress",
				"type": "address",
				"internalType": "address"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "addCompagnyToRequestDonation",
		"inputs": [
			{
				"name": "_SIREN",
				"type": "uint256",
				"internalType": "uint256"
			},
			{
				"name": "_id",
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "createCompagny",
		"inputs": [
			{
				"name": "_CompagnyName",
				"type": "string",
				"internalType": "string"
			},
			{
				"name": "_CompagnySIREN",
				"type": "uint256",
				"internalType": "uint256"
			},
			{
				"name": "_RequestAmount",
				"type": "uint256",
				"internalType": "uint256"
			},
			{
				"name": "_CompagnyAddress",
				"type": "address",
				"internalType": "address"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "createRequestDonation",
		"inputs": [
			{
				"name": "_ProjectName",
				"type": "string",
				"internalType": "string"
			},
			{
				"name": "_ProjectDescription",
				"type": "string",
				"internalType": "string"
			},
			{
				"name": "_ProjectQuote",
				"type": "string",
				"internalType": "string"
			},
			{
				"name": "_ProjectImage",
				"type": "string",
				"internalType": "string"
			},
			{
				"name": "_ProjectAmount",
				"type": "uint256",
				"internalType": "uint256"
			},
			{
				"name": "_LimiteDate",
				"type": "uint256",
				"internalType": "uint256"
			},
			{
				"name": "_Longitude",
				"type": "string",
				"internalType": "string"
			},
			{
				"name": "_Latitude",
				"type": "string",
				"internalType": "string"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "getNbCompagny",
		"inputs": [
			{
				"name": "_id",
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"outputs": [
			{
				"name": "",
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "getRequestDonation",
		"inputs": [
			{
				"name": "_id",
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"outputs": [
			{
				"name": "ProjectName",
				"type": "string",
				"internalType": "string"
			},
			{
				"name": "ProjectDescription",
				"type": "string",
				"internalType": "string"
			},
			{
				"name": "ProjectQuote",
				"type": "string",
				"internalType": "string"
			},
			{
				"name": "ProjectImage",
				"type": "string",
				"internalType": "string"
			},
			{
				"name": "ProjectAmount",
				"type": "uint256",
				"internalType": "uint256"
			},
			{
				"name": "CreationDate",
				"type": "uint256",
				"internalType": "uint256"
			},
			{
				"name": "LimiteDate",
				"type": "uint256",
				"internalType": "uint256"
			},
			{
				"name": "Companies",
				"type": "tuple[]",
				"internalType": "struct compagny.compagnyInfo[]",
				"components": [
					{
						"name": "CompagnyName",
						"type": "string",
						"internalType": "string"
					},
					{
						"name": "CompagnySIREN",
						"type": "uint256",
						"internalType": "uint256"
					},
					{
						"name": "RequestAmount",
						"type": "uint256",
						"internalType": "uint256"
					},
					{
						"name": "CompagnyAddress",
						"type": "address",
						"internalType": "address"
					}
				]
			},
			{
				"name": "Longitude",
				"type": "string",
				"internalType": "string"
			},
			{
				"name": "Latitude",
				"type": "string",
				"internalType": "string"
			},
			{
				"name": "status",
				"type": "uint8",
				"internalType": "enum State.Status"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "id",
		"inputs": [],
		"outputs": [
			{
				"name": "",
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "idToRequestDonation",
		"inputs": [
			{
				"name": "",
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"outputs": [
			{
				"name": "",
				"type": "address",
				"internalType": "contract RequestDonation"
			}
		],
		"stateMutability": "view"
	}
]