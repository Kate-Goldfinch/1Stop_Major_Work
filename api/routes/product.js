const router = require("express").Router();
const Product = require("../models/Product");

//CREATE
router.post("/", async (req, res) => {});

//UPDATE
router.put("/:id", async (req, res) => {});

//DELETE
router.delete("/:id", async (req, res) => {});

//GET PRODUCT
router.get("/:id", async (req, res) => {});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {});

module.exports = router;
