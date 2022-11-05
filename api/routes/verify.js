const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
	const token = req.headers.authorization?.split(" ")[1];
	console.log(token)
	if (token) {
		// const token = authHeader.split(" ")[1];
		jwt.verify(token, "secret", (err, user) => {
			if (err) {
				return res.status(403).json("Not valid.");
			}
			req.user = user;
			next();
		});
	} else {
		return res.status(401).json("Not authenticated.");
	}
};

const verifyTokenAuth = (req, res, next) => {
	verifyToken(req, res, () => {
		if (req.user.id === req.params.id || req.user.admin) {
			next();
		} else {
			return res.status(403).json("Not authorized.");
		}
	});
};

const verifyTokenAdmin = (req, res, next) => {
	verifyToken(req, res, () => {
		// if (req.user.admin) {
			next();
		// } else {
		// 	return res.status(403).json("Not authorized.");
		// }
	});
};

module.exports = {
	verifyTokenAdmin,
	verifyTokenAuth,
	verifyToken,
};
