export const setAddress = (state: string = "", action: any) => {
	switch (action.type) {
		case "ADDRESS":
			return action.payload;
		default:
			return state;
	}
};

export const setLoggedIn = (state: boolean = false, action: any) => {
	switch (action.type) {
		case "LOGGEDIN":
			return action.payload;
		default:
			return state;
	}
};

export const setStrikePrice = (state: number = 0, action: any) => {
	switch (action.type) {
		case "STRIKEPRICE":
			return action.payload;
		default:
			return state;
	}
};

export const setPremium = (state: number | string = 0, action: any) => {
	switch (action.type) {
		case "PREMIUM":
			return action.payload;
		default:
			return state;
	}
};

export const setQuantity = (state: number = 0, action: any) => {
	switch (action.type) {
		case "QUANTITY":
			return action.payload;
		default:
			return state;
	}
};

export const setExpiry = (state: number | any = 0, action: any) => {
	switch (action.type) {
		case "EXPIRY":
			return action.payload;
		default:
			return state;
	}
};

export const setLoadingStrike = (state: boolean = true, action: any) => {
	switch (action.type) {
		case "LOADINGSTRIKE":
			return action.payload;
		default:
			return state;
	}
};

export const setLoadingPremium = (state: boolean = true, action: any) => {
	switch (action.type) {
		case "LOADINGPREMIUM":
			return action.payload;
		default:
			return state;
	}
};

export const setLoadingQuantity = (state: boolean = true, action: any) => {
	switch (action.type) {
		case "LOADINGQUANTITY":
			return action.payload;
		default:
			return state;
	}
};

export const setLoadingExpiry = (state: boolean = true, action: any) => {
	switch (action.type) {
		case "LOADINGEXPIRY":
			return action.payload;
		default:
			return state;
	}
};

//#################################################################################################################################

export const setStrikePriceC = (state: number = 0, action: any) => {
	switch (action.type) {
		case "STRIKEPRICEC":
			return action.payload;
		default:
			return state;
	}
};

export const setPremiumC = (state: number | string = 0, action: any) => {
	switch (action.type) {
		case "PREMIUMC":
			return action.payload;
		default:
			return state;
	}
};

export const setQuantityC = (state: number = 0, action: any) => {
	switch (action.type) {
		case "QUANTITYC":
			return action.payload;
		default:
			return state;
	}
};

export const setExpiryC = (state: number | any = 0, action: any) => {
	switch (action.type) {
		case "EXPIRYC":
			return action.payload;
		default:
			return state;
	}
};

export const setLoadingStrikeC = (state: boolean = true, action: any) => {
	switch (action.type) {
		case "LOADINGSTRIKEC":
			return action.payload;
		default:
			return state;
	}
};

export const setLoadingPremiumC = (state: boolean = true, action: any) => {
	switch (action.type) {
		case "LOADINGPREMIUMC":
			return action.payload;
		default:
			return state;
	}
};

export const setLoadingQuantityC = (state: boolean = true, action: any) => {
	switch (action.type) {
		case "LOADINGQUANTITYC":
			return action.payload;
		default:
			return state;
	}
};

export const setLoadingExpiryC = (state: boolean = true, action: any) => {
	switch (action.type) {
		case "LOADINGEXPIRYC":
			return action.payload;
		default:
			return state;
	}
};

export const setError = (state: boolean = false, action: any) => {
	switch (action.type) {
		case "ERROR":
			return action.payload;
		default:
			return state;
	}
};
