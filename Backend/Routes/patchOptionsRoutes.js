const express = require("express");
const router = express.Router();
const model = require("../Models/Model");
var ObjectId = require("mongodb").ObjectId;

router.patch("/call", async (req, res) => {
	try {
		const filter = { _id: ObjectId("6330f2ef914fee31764fa5db") };
		const updatedData = req.body;
		console.log(updatedData);
		const options = { new: true };

		const result = await model.updateOne(filter, updatedData, options);

		res.send(result);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

router.patch("/put", async (req, res) => {
	try {
		const filter = { _id: ObjectId("6330e5d2914fee31764fa5da") };
		const updatedData = req.body;
		console.log(updatedData);
		const options = { new: true };

		const result = await model.updateOne(filter, updatedData, options);

		res.send(result);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

router.patch("/addressCall", async (req, res) => {
	try {
		const filter = { _id: ObjectId("6330f407914fee31764fa5dc") };
		const updatedData = req.body;
		console.log(updatedData);
		const options = { new: true };

		const result = await model.updateOne(filter, updatedData, options);

		res.send(result);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

router.patch("/addressPut", async (req, res) => {
	try {
		const filter = { _id: ObjectId("63328f133f52cf0250e6d686") };
		const updatedData = req.body;
		console.log(updatedData);
		const options = { new: true };

		const result = await model.updateOne(filter, updatedData, options);

		res.send(result);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

module.exports = router;
