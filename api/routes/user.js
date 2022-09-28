const router = require("express").Router();
const User = require("../models/User");

//UPDATE
router.put("/:id", async (req, res) => {});

//GET USER
router.get("/:id", async (req, res) => {});

//GET ALL USER
router.get("/", async (req, res) => {});

//DELETE
router.delete("/:id", async (req, res) => {});

module.exports = router;
