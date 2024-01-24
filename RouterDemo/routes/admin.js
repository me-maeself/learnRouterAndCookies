const express = require("express");
const router = express.Router();

// router.use means that every time router called, this would be called
router.use((req, res, next) => {
	if (req.query.isAdmin) {
		next();
	}
	res.send("Sorry, not an admin.");
});

router.get("/secret", (req, res) => {
	res.send("This is top secret.");
});

router.get("/deleteEverything", (req, res) => {
	res.send("Deleted it all.");
});

module.exports = router;
