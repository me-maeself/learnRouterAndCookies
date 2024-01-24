const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.send("All dogs.");
});

router.get("/:id", (req, res) => {
	res.send("Viewing a dog.");
});

router.get("/:id/edit", (req, res) => {
	res.send("Edit one dog");
});

router.post("/", (req, res) => {
	res.send("Create a dog.");
});

module.exports = router;
