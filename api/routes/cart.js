const router = require("express").Router();
const Cart = require("../models/Cart");
const { verifyToken, verifyTokenAuth, verifyTokenAdmin } = require("./verify");

//CREATE
router.post("/", verifyToken, async (req, res) => {
	const cart = new Cart(req.body);
	try {
		const saved = await cart.save();
		res.status(200).json(saved);
	} catch (error) {
		res.status(500).json(error);
	}
});

//UPDATE
router.put("/:id", verifyTokenAuth, async (req, res) => {
	try {
		const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.status(200).json(cart);
	} catch (error) {
		res.status(500).json(error);
	}
});

//DELETE
router.delete("/:id", verifyTokenAuth, async (req, res) => {
	try {
		await Cart.findByIdAndDelete(req.params.id);
		res.status(200).json(`Cart ID: ${req.params.id} deleted successfully`);
	} catch (error) {
		res.status(500).json(error);
	}
});

//GET USER CART
router.get("/:id", verifyTokenAuth, async (req, res) => {
	try {
		const cart = await Cart.find({ user: req.params.id });
		res.status(200).json(cart);
	} catch (error) {
		res.status(500).json(error);
	}
});

//GET ALL
router.get("/", verifyTokenAdmin, async (req, res) => {
	try {
		const carts = await Cart.find();
		res.status(200).json(carts);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
