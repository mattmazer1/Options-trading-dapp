const hre = require("hardhat");
const ethers = require("ethers");

async function main() {
	const callPremium = ethers.BigNumber.from("100000000000000000");
	const callStrikePrice = 131511;
	const callStrikePriceValue = ethers.BigNumber.from("991848215430325300");
	const callQuantity = 1;
	const callExpiry = 1671066000;

	const putPremium = ethers.BigNumber.from("100000000000000000");
	const putStrikePrice = 125414;
	const putStrikePriceValue = ethers.BigNumber.from("942581430654301200");
	const putQuantity = 1;
	const putExpiry = 1671066000;

	const CallOption = await hre.ethers.getContractFactory("callOption");
	const callOption = await CallOption.deploy(
		callPremium,
		callStrikePrice,
		callStrikePriceValue,
		callQuantity,
		callExpiry
	);
	await callOption.deployed();
	console.log("Call option contract deployed to", callOption.address);

	const PutOption = await hre.ethers.getContractFactory("putOption");
	const putOption = await PutOption.deploy(
		putPremium,
		putStrikePrice,
		putStrikePriceValue,
		putQuantity,
		putExpiry
	);

	await putOption.deployed();
	console.log("Put option contract deployed to", putOption.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
