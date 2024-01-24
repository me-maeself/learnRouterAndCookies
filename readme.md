TODO Look how to document something automatically.

# Router and Cookies

## Overview
Crucial:
- Express Router Basics
- Understanding Cookies
- Cookies Parser

Important:
- Signed Cookies

Nice to have:
- HMAC Signing

## 487. Express Router Intro
- instead of making one big js file, we rather use router.
  - It's a way to direct first few url word into smaller files.

```js
// in routes/shelters.js
const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
	res.send("All Shelters.");
});

// in index.js
const shelterRoutes = require("./routes/shelters");
app.use("/shelters", shelterRoutes);
// above, we could change /shelters to any word, and every route inside
// shelter.js would change 
```

## 488. Express Router and Middleware
- like `app.use`, we could use `router.use` to do something every time.
```js
// router.use means that every time router called, this would be called
router.use((req, res, next) => {
	if (req.query.isAdmin) {
		next();
	}
	res.send("Sorry, not an admin.");
});
```

## 489. Cookies
## 490. Sending Cookies
## 491. Cookies Parser Middleware
## 492. Signing Cookies
## 493. Optional: HMAC Signing