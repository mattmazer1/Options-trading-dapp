import { useState, useEffect } from "react";
import { RootState } from "..";
import { contractPut } from "./Navbar";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { _setError } from "../Actions/Actions";
import { ethers } from "ethers";
/*eslint-disable*/
export default function BuyPut() {
	const address = useSelector((state: RootState) => state.address);
	const [purchase, setPurchase] = useState<boolean>();
	const [dbAddress, setDbAddress] = useState<string>("");
	const dispatch = useDispatch();
	const strikePrice = useSelector((state: RootState) => state.strikePriceC);
	const premium = useSelector((state: RootState) => state.premiumC);
	const quantity = useSelector((state: RootState) => state.quantityC);
	const expiry = useSelector((state: RootState) => state.expiryC);
	const loadingStrike = useSelector((state: RootState) => state.loadingStrikeC);
	const loadingPremium = useSelector(
		(state: RootState) => state.loadingPremiumC
	);
	const loadingQuantity = useSelector(
		(state: RootState) => state.loadingQuantityC
	);
	const loadingExpiry = useSelector((state: RootState) => state.loadingExpiryC);
	const loggedIn = useSelector((state: RootState) => state.loggedIn);

	const putPatch = async (put: boolean) => {
		const patchData = {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				putBought: put,
			}),
		};

		try {
			const response = await fetch(
				process.env.REACT_APP_PATCH_PUT as string,
				patchData
			);
			await response.json();

			if (!response.ok) {
				throw new Error("Something went wrong");
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

	const patchAddress = async (address: string) => {
		const patchData = {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				addressBoughtPut: address,
			}),
		};

		try {
			const response = await fetch(
				process.env.REACT_APP_PATCH_ADDRESS_PUT as string,
				patchData
			);
			await response.json();

			if (!response.ok) {
				throw new Error("Something went wrong");
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

	const putData = async () => {
		const response = await fetch(
			process.env.REACT_APP_GET_PUT_BOUGHT as string
		);

		if (!response.ok) {
			throw new Error("Something went wrong");
		}
		const data = await response.json();
		const getPut = data.putBought;
		setPurchase(getPut);
	};

	const addressData = async () => {
		const response = await fetch(
			process.env.REACT_APP_GET_ADDRESS_BOUGHT_PUT as string
		);

		if (!response.ok) {
			throw new Error("Something went wrong");
		}
		const data = await response.json();
		const getAddress = data.addressBoughtPut;
		setDbAddress(getAddress);
	};

	const fetchAll = async () => {
		try {
			await putData();
			await addressData();
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
		fetchAll();
	}, [dbAddress]);

	const purchasePut = async () => {
		try {
			const reqPurchase = await contractPut.purchase({
				value: ethers.utils.parseEther((0.1).toString()),
			});
			await reqPurchase.wait(1);
			setPurchase(true);
			putPatch(true);
			patchAddress(address);
			//window.location.reload();
		} catch (e: any) {
			console.log(e.message);
			dispatch(_setError(true));
			const err = setTimeout(() => {
				dispatch(_setError(false));
			}, 1000);

			return () => clearTimeout(err);
		}
	};

	const sellPut = async () => {
		try {
			const reqSell = await contractPut.sell();
			await reqSell.wait(1);
			setPurchase(false);
			putPatch(false);
		} catch (e: any) {
			console.log(e.message);
			dispatch(_setError(true));
			const err = setTimeout(() => {
				dispatch(_setError(false));
			}, 1000);

			return () => clearTimeout(err);
		}
	};

	function timeConverter(unix: number) {
		const a = new Date(unix * 1000);
		const months = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		];
		const year = a.getFullYear();
		const month = months[a.getMonth()];
		const date = a.getDate();
		const hour = a.getHours();
		const min = a.getMinutes();
		const sec = a.getSeconds();
		const time =
			date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
		return time;
	}

	const card = (buttonChoice: string) => {
		let button: any;
		if (buttonChoice === "buy" && loggedIn === true) {
			button = (
				<button
					onClick={purchasePut}
					className="buttonBase bg-blue-600 hover:bg-blue-800"
				>
					Buy now
				</button>
			);
		} else {
			button = (
				<button className="buttonBase bg-blue-600 hover:bg-blue-800">
					Wallet not connected
				</button>
			);
		}
		if (buttonChoice === "sell") {
			button = (
				<button
					onClick={sellPut}
					className="buttonBase bg-red-600 hover:bg-red-700"
				>
					Sell
				</button>
			);
		} else if (buttonChoice === "contractBought") {
			button = (
				<button className="buttonBase bg-gray-500 hover:bg-gray-500">
					Contract bought
				</button>
			);
		}
		return (
			<div className="flex justify-center mt-10 mb-20">
				<div className="block text-white p-6 rounded-lg shadow-lg bg-gray-800 max-w-sm">
					<div className=" flex flex-col items-center text-base mb-4">
						{loadingStrike ? (
							<div className="text-xl mb-4">Strike price: loading...</div>
						) : (
							<div className=" text-xl mb-4">Strike price: {strikePrice}</div>
						)}

						{loadingPremium ? (
							<div className="text-xl mb-4">Premium: loading...</div>
						) : (
							<div className="text-xl mb-4">Premium: {premium} eth</div>
						)}

						{loadingQuantity ? (
							<div className="text-xl mb-4">Quantity: loading...</div>
						) : (
							<div className="text-xl mb-4">Quantity: {quantity} </div>
						)}

						{loadingExpiry ? (
							<div className="text-xl mb-4">Expiry: loading...</div>
						) : (
							<div className="text-xl mb-4">
								Expiry: {timeConverter(expiry)}
							</div>
						)}

						{button}
					</div>
				</div>
			</div>
		);
	};
	const toggleBuy = () => {
		return <div>{card("buy")}</div>;
	};

	const cantBuy = () => {
		return (
			<div>
				{address === dbAddress ? (
					<div>{card("sell")}</div>
				) : (
					<div>{card("contractBought")}</div>
				)}
			</div>
		);
	};

	return <div>{purchase ? cantBuy() : toggleBuy()}</div>;
}
