const dotenv = require("dotenv");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const user = require("./routes/user");
const product = require("./routes/product");
const search = require("./routes/search");
const cart = require("./routes/cart");
const auth = require("./routes/auth");
const cors = require("cors");
dotenv.config();

const databaseConnect = () => {
	mongoose
		.connect(process.env.MONGO_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => {
			console.log("Mongodb Database Connected");
		})
		.catch((error) => {
			console.log(error);
		});
};

app.use(cors());
app.use(express.json());
app.use("/api/users", user);
app.use("/api/products", product);
app.use("/api/search", search);
app.use("/api/carts", cart);
app.use("/auth", auth);

const PORT = process.env.PORT || 3001;

databaseConnect();

app.listen(PORT, function () {
	console.log(`Backend running on port: ${PORT}`);
});
