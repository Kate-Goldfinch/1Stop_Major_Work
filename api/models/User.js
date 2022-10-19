const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		name: {
			type: String,
		},
		picture: {
			type: String,
		},
		password: {
			type: String,
		},
		admin: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
