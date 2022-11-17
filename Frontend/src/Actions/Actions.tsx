export const setWalletAddress = (newAddress: string) => {
	return {
		type: "ADDRESS",
		payload: newAddress,
	};
};

export const setUserLoggedIn = (loggedIn: boolean) => {
	return {
		type: "LOGGEDIN",
		payload: loggedIn,
	};
};

export const _setStrikePrice = (strikePrice: number) => {
	return {
		type: "STRIKEPRICE",
		payload: strikePrice,
	};
};

export const _setPremium = (premium: number | string) => {
	return {
		type: "PREMIUM",
		payload: premium,
	};
};

export const _setQuantity = (quantity: number) => {
	return {
		type: "QUANTITY",
		payload: quantity,
	};
};

export const _setExpiry = (expiry: number | any) => {
	return {
		type: "EXPIRY",
		payload: expiry,
	};
};

export const _setLoadingStrike = (loadStrike: boolean) => {
	return {
		type: "LOADINGSTRIKE",
		payload: loadStrike,
	};
};

export const _setLoadingPremium = (loadPremium: boolean) => {
	return {
		type: "LOADINGPREMIUM",
		payload: loadPremium,
	};
};

export const _setLoadingQuantity = (loadQuantity: boolean) => {
	return {
		type: "LOADINGQUANTITY",
		payload: loadQuantity,
	};
};

export const _setLoadingExpiry = (loadExpiry: boolean) => {
	return {
		type: "LOADINGEXPIRY",
		payload: loadExpiry,
	};
};

//###################################################################################################################################

export const _setStrikePriceC = (strikePrice: number) => {
	return {
		type: "STRIKEPRICEC",
		payload: strikePrice,
	};
};

export const _setPremiumC = (premium: number | string) => {
	return {
		type: "PREMIUMC",
		payload: premium,
	};
};

export const _setQuantityC = (quantity: number) => {
	return {
		type: "QUANTITYC",
		payload: quantity,
	};
};

export const _setExpiryC = (expiry: number | any) => {
	return {
		type: "EXPIRYC",
		payload: expiry,
	};
};

export const _setLoadingStrikeC = (loadStrike: boolean) => {
	return {
		type: "LOADINGSTRIKEC",
		payload: loadStrike,
	};
};

export const _setLoadingPremiumC = (loadPremium: boolean) => {
	return {
		type: "LOADINGPREMIUMC",
		payload: loadPremium,
	};
};

export const _setLoadingQuantityC = (loadQuantity: boolean) => {
	return {
		type: "LOADINGQUANTITYC",
		payload: loadQuantity,
	};
};

export const _setLoadingExpiryC = (loadExpiry: boolean) => {
	return {
		type: "LOADINGEXPIRYC",
		payload: loadExpiry,
	};
};

export const _setError = (error: boolean) => {
	return {
		type: "ERROR",
		payload: error,
	};
};
