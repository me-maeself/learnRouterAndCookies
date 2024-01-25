TODO Look how to document something automatically.
TODO what is domain
TODO Re learn what is app.use do, especially with other packages.

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
What is cookies?
- bits of information stored in client's browser.
- cookies associated to an address.
- cookies would get sent every HTTP request.

Cookies allow use to make HTTP stateful. Usage:
- Session Management
- Personalization
- Tracking

## 490. Sending Cookies
- `res.cookie(<name>, <value>)`
```js
app.get("/name", (req, res) => {
	res.cookie("name", "duck");
	res.cookie("animal", "harlequin shrimp");
	res.send("Ok, sent you a cookie!");
});
```

## 491. Cookies Parser Middleware
- npm i cookie-parser
- `req.cookies.<name>`
```js
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.get("/greet", (req, res) => {
	const { name = "No-name" } = req.cookies;
	console.log(req.cookies);
	res.send(`Hey there~ ${name}`);
});
```

## 492. Signing Cookies
digital signature, checking its integrity. not to hide it.
- app.use(cookieParser("<secretCode>"))
- res.cookie("<name>", <value>, {signed: true})
- req.signedCookies

## 493. Optional: HMAC Signing
- HMAC
- cookie-parser