require("dotenv").config();
const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//Register user
router.post("/register", async (req, res) => {
	bcrypt.genSalt(10, function (err, salt) {
		bcrypt.hash(req.body.password, salt, async function (err, hash) {
			const user = new User({
				username: req.body.username,
				email: req.body.email,
				password: hash,
			});
			const returned = await user.save().catch((err) => {
				res.status(401).json(err);
			});

			if (returned) {
				if (user._id) {
					res.status(200).json({
						username: returned.username,
						token: returned._id,
					});
				}
			}
		});
	});
});

router.post("/login", async (req, res) => {
	try {
		const user = await User.findOne({ username: req.body.username });
		const password = req.body.password;
		if (user) {
			bcrypt.compare(password, user.password, function (err, result) {
				if (result) {
					res.status(200).json({
						username: user.username,
						token: user._id,
					});
				} else {
					res.status(401).json("No matching user");
				}
			});
		} else {
			res.status(401).json("No matching user");
		}
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
