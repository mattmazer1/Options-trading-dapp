const express = require("express");
const router = express.Router();
const options = require("../Models/Model");
var ObjectId = require("mongodb").ObjectId;

router.get("/all", async (req, res) => {
	try {
		const data = await options.find();
		res.json(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
		console.log(error.message);
	}
});

router.get("/callBought", async (req, res) => {
	try {
		const data = await options.findById({
			_id: ObjectId("6330f2ef914fee31764fa5db"),
		});
		res.json(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
		console.log(error.message);
	}
});

router.get("/putBought", async (req, res) => {
	try {
		const data = await options.findById({
			_id: ObjectId("6330e5d2914fee31764fa5da"),
		});
		res.json(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

router.get("/addressBoughtCall", async (req, res) => {
	try {
		const data = await options.findById({
			_id: ObjectId("6330f407914fee31764fa5dc"),
		});
		res.json(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

router.get("/addressBoughtPut", async (req, res) => {
	try {
		const data = await options.findById({
			_id: ObjectId("63328f133f52cf0250e6d686"),
		});
		res.json(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

module.exports = router;
