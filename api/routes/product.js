const router = require("express").Router();
const Product = require("../models/Product");
const { verifyTokenAdmin } = require("./verify");

//CREATE
router.post("/", verifyTokenAdmin, async (req, res) => {
	console.log("creating");
	const product = new Product(req.body);
	try {
		const saved = await product.save();
		res.status(200).json(saved);
	} catch (error) {
		res.status(500).json(error);
	}
});

//UPDATE
router.put("/:id", async (req, res) => {
	try {
		const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json(error);
	}
});

//DELETE
router.delete("/:id", verifyTokenAdmin, async (req, res) => {
	try {
		await Product.findByIdAndDelete(req.params.id);
		res.status(200).json(`Product ID: ${req.params.id} deleted successfully`);
	} catch (error) {
		res.status(500).json(error);
	}
});

//GET PRODUCT
router.get("/:id", async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json(error);
	}
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
	try {
		const products = await Product.find();
		res.status(200).json(products);
	} catch (error) {
		res.status(500).json(error);
	}
});

//Use regex to search users for partical match, returns matches
router.get("/search", async (req, res) => {
	try {
		const { searchTerm } = req.query;
		const products = await Product.find({
			title: { $regex: searchTerm, $options: "i" },
		});
		res.status(200).json(products);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
