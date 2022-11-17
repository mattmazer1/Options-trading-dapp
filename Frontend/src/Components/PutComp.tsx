import { useEffect } from "react";
import { ethers } from "ethers";
import {
	_setStrikePriceC,
	_setPremiumC,
	_setQuantityC,
	_setExpiryC,
	_setLoadingStrikeC,
	_setLoadingPremiumC,
	_setLoadingQuantityC,
	_setLoadingExpiryC,
	_setError,
} from "../Actions/Actions";
import { useDispatch } from "react-redux/es/exports";
import { contractPut } from "./Navbar";
/*eslint-disable*/
export default function Put() {
	const dispatch = useDispatch();

	const viewStrikePrice = async () => {
		try {
			const getStrikePrice = await contractPut.viewStrikePrice();
			dispatch(_setStrikePriceC(getStrikePrice.toString()));
			dispatch(_setLoadingStrikeC(false));
		} catch (e: any) {
			console.log(e.message);
			dispatch(_setError(true));
			const err = setTimeout(() => {
				dispatch(_setError(false));
			}, 1000);

			return () => clearTimeout(err);
		}
	};

	const viewPremium = async () => {
		try {
			const getPremium = await contractPut.viewPremium();
			dispatch(_setPremiumC(ethers.utils.formatEther(getPremium.toString())));
			dispatch(_setLoadingPremiumC(false));
		} catch (e: any) {
			console.log(e.message);
			dispatch(_setError(true));
			const err = setTimeout(() => {
				dispatch(_setError(false));
			}, 1000);

			return () => clearTimeout(err);
		}
	};

	const viewQuantity = async () => {
		try {
			const getQuantity = await contractPut.viewQuantity();
			dispatch(_setQuantityC(getQuantity.toString()));
			dispatch(_setLoadingQuantityC(false));
		} catch (e: any) {
			console.log(e.message);
			dispatch(_setError(true));
			const err = setTimeout(() => {
				dispatch(_setError(false));
			}, 1000);

			return () => clearTimeout(err);
		}
	};

	const viewExpiry = async () => {
		try {
			const getExpiry = await contractPut.viewExpiry();
			dispatch(_setExpiryC(getExpiry.toString()));
			dispatch(_setLoadingExpiryC(false));
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
		viewStrikePrice();
	}, []);
	useEffect(() => {
		viewPremium();
	}, []);
	useEffect(() => {
		viewQuantity();
	}, []);
	useEffect(() => {
		viewExpiry();
	}, []);

	return (
		<div className="text-3xl flex flex-col justify-center items-center mt-10">
			<h1>Available put options:</h1>
		</div>
	);
}
