require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const url = process.env.MONGO_CONNECTION;

app.use(cors());
app.use(express.json());

//Database
mongoose.connect(url, () => {
	console.log("database connected");
});
//Server
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});

app.use("/get", require("./Routes/getOptionsRoutes"));
app.use("/patch", require("./Routes/patchOptionsRoutes"));

app.get("/test", (req, res) => {
	res.send("Connected");
});
