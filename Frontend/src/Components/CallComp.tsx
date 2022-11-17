import { useEffect } from "react";
import { ethers } from "ethers";
import {
	_setStrikePrice,
	_setPremium,
	_setQuantity,
	_setExpiry,
	_setLoadingStrike,
	_setLoadingPremium,
	_setLoadingQuantity,
	_setLoadingExpiry,
	_setError,
} from "../Actions/Actions";
import { useDispatch } from "react-redux/es/exports";
import { contractCall } from "./Navbar";
/*eslint-disable*/
export default function Call() {
	const dispatch = useDispatch();

	const viewStrikePrice = async () => {
		try {
			const getStrikePrice = await contractCall.viewStrikePrice();
			dispatch(_setStrikePrice(getStrikePrice.toString()));
			dispatch(_setLoadingStrike(false));
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
			const getPremium = await contractCall.viewPremium();
			dispatch(_setPremium(ethers.utils.formatEther(getPremium.toString())));
			dispatch(_setLoadingPremium(false));
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
			const getQuantity = await contractCall.viewQuantity();
			dispatch(_setQuantity(getQuantity.toString()));
			dispatch(_setLoadingQuantity(false));
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
			const getExpiry = await contractCall.viewExpiry();
			dispatch(_setExpiry(getExpiry.toString()));
			dispatch(_setLoadingExpiry(false));
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
			<h1>Available call options:</h1>
		</div>
	);
}
