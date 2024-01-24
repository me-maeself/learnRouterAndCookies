const express = require("express");
const app = express();
const port = 3000;
const shelterRoutes = require("./routes/shelters");
const dogsRoutes = require("./routes/dogs");
const adminRoutes = require("./routes/admin");

app.use("/shelters", shelterRoutes);
app.use("/dogs", dogsRoutes);
app.use("/admin", adminRoutes);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
