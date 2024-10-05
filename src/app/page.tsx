"use client";
import { useAccount, useDisconnect } from "wagmi";
import Connect from "./components/Connect";

export default function Home() {
	const { address } = useAccount();
	return (
		<>
		<div className="m-3">
			<Connect />
		</div>
		</>
	);
}
