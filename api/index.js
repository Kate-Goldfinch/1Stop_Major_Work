const dotenv = require("dotenv");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const cors = require("cors");
dotenv.config();

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log("DB Connected!"))
	.catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);

PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
	console.log(`Backend running on port: ${PORT}`);
});
