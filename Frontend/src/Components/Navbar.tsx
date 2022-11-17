import { useState, useEffect } from "react";
import { ABICall, ABIPut } from "../ABI";
import { useDispatch } from "react-redux/es/exports";
import {
	setWalletAddress,
	setUserLoggedIn,
	_setError,
} from "../Actions/Actions";
import { ethers } from "ethers";

export const contractAddressCall: string =
	"0x69A27c39C81Be2190F7112D8acAB7aE197653699";

export const contractAddressPut: string =
	"0xe864057C24cb547f0c06E06E56f865F38d158dA6";

export let provider = window.ethereum
	? new ethers.providers.Web3Provider(window.ethereum)
	: new ethers.providers.JsonRpcProvider(process.env.REACT_APP_RPC_PROVIDER);

export let signer: any =
	window.ethereum && window.ethereum.selectedAddress
		? provider.getSigner()
		: undefined;

export let contractCall = new ethers.Contract(
	contractAddressCall,
	ABICall,
	signer ?? provider
);

export let contractPut = new ethers.Contract(
	contractAddressPut,
	ABIPut,
	signer ?? provider
);
/*eslint-disable*/
export default function Navbar() {
	const dispatch = useDispatch();
	const [buttonText, setButtonText] = useState<string>("Connect wallet");

	const connectNetwork = async () => {
		const chainId = 5; //goerli
		if (window.ethereum.networkVersion !== chainId) {
			await window.ethereum.request({
				method: "wallet_switchEthereumChain",
				params: [{ chainId: "0x5" }],
			});
		}
	};

	const connectWallet = async () => {
		try {
			if (window.ethereum) {
				await provider.send("eth_requestAccounts", []);

				connectNetwork();

				window.ethereum.on("accountsChanged", function () {
					window.location.reload();
				});

				window.ethereum.on("networkChanged", function () {
					window.location.reload();
				});
			} else {
				setButtonText("Connect Wallet");
			}
		} catch (e: any) {
			console.log(e.message);
			dispatch(_setError(true));
			const err = setTimeout(() => {
				dispatch(_setError(false));
			}, 1000);

			return () => clearTimeout(err);
		}
	};

	const persistRender = async () => {
		try {
			const accounts = await provider.listAccounts();
			if (accounts.length > 0) {
				signer = provider.getSigner();
				contractCall = contractCall.connect(signer);
				contractPut = contractPut.connect(signer);
				setButtonText("Connected");
				dispatch(setUserLoggedIn(true));
				connectNetwork();
			} else {
				setButtonText("Connect wallet");
			}

			window.ethereum.on("accountsChanged", function () {
				window.location.reload();
				console.log("test");
			});

			window.ethereum.on("networkChanged", function () {
				window.location.reload();
				console.log("testing");
			});
		} catch (e: any) {
			console.log(e.message);
			dispatch(_setError(true));
			const err = setTimeout(() => {
				dispatch(_setError(false));
			}, 1000);

			return () => clearTimeout(err);
		}
	};
	useEffect(() => {
		persistRender();
	}, []);

	const fetchAddress = async () => {
		try {
			const signerAddress = await signer.getAddress();
			dispatch(setWalletAddress(signerAddress));
		} catch (e: any) {
			console.log(e.message);
			// dispatch(_setError(true));
			// const err = setTimeout(() => {
			// 	dispatch(_setError(false));
			// }, 1000);

			// return () => clearTimeout(err);
		}
	};
	useEffect(() => {
		fetchAddress();
	}, [signer]);

	return (
		<>
			<div className="flex flex-row justify-center mt-5">
				<div className="text-4xl mt-20 sm:mt-0">Options trading</div>

				<button
					onClick={connectWallet}
					className="absolute right-2 text-xl bg-orange-600 rounded-lg px-3 py-2 hover:bg-orange-700 bounce"
				>
					{buttonText}
				</button>
			</div>
		</>
	);
}
