"use server";
import fs from 'fs';
import pinataSDK from "@pinata/sdk";

export default async function ScrapAddress(file: string): Promise<string[]> {
	const pinata = new pinataSDK({ pinataJWTKey: '2303fca03e13843f8352' });

	const stream = fs.createReadStream('./yourfile.png');
	const res = await pinata.pinFileToIPFS(stream)
	console.log(res);

	return data;
}
