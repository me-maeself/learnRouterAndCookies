const express = require("express");
const app = express();
const port = 3000;

const cookieParser = require("cookie-parser");
app.use(cookieParser("thisIsMySecret"));

app.get("/greet", (req, res) => {
	const { name = "No-name" } = req.cookies;
	console.log(req.cookies);
	res.send(`Hey there~ ${name}`);
});

app.get("/name", (req, res) => {
	res.cookie("name", "duck");
	res.cookie("animal", "harlequin shrimp");
	res.send("Ok, sent you a cookie!");
});

app.get("/sign", (req, res) => {
	res.cookie("fruit", "tomato", { signed: true });
	res.send("Git signed cookie bro.");
});

app.get("/verify", (req, res) => {
	res.send(req.signedCookies);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
