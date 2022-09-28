const router = require("express").Router();
const Cart = require("../models/Cart");

//CREATE
router.post("/", async (req, res) => {});

//UPDATE
router.put("/:id", async (req, res) => {});

//DELETE
router.delete("/:id", async (req, res) => {});

//GET USER CART
router.get("/:userId", async (req, res) => {});

//GET ALL
router.get("/", async (req, res) => {});

module.exports = router;
