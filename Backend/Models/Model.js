const mongoose = require("mongoose");

const OptionSchema = new mongoose.Schema({
	_id: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},

	callBought: {
		type: Boolean,
		required: true,
	},

	_id: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},

	putBought: {
		type: Boolean,
		required: true,
	},

	_id: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},

	addressBoughtCall: {
		type: String,
		required: true,
	},

	_id: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},

	addressBoughtPut: {
		type: String,
		required: true,
	},
});

const callOption = mongoose.model("options", OptionSchema);

module.exports = callOption;
