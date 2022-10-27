const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
		},
		user_id: {
			type: String,
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
