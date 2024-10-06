export const contractAdressDonation = "0x75537828f2ce51be7289709686A69CbFDbB714F1";
export const contractABIDonation = [
	{
		"inputs": [],
		"name": "AmountPaid",
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
		"name": "addCompagny",
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
		"inputs": [],
		"name": "donate",
		"outputs": [],
		"stateMutability": "payable",
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
		"name": "donorAddressToAmount",
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
		"inputs": [],
		"name": "getCompagnylength",
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
		"inputs": [],
		"name": "getRequestDonationInfo",
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
		"name": "requestdonation",
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
						"name": "Longitude",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Latitude",
						"type": "string"
					}
				],
				"internalType": "struct RequestDonation.Location",
				"name": "location",
				"type": "tuple"
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
		"name": "sendDonationToCompagny",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]