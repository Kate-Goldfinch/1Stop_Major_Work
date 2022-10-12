const dotenv = require("dotenv");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const cors = require("cors");
dotenv.config();

const databaseConnect = () => {
	mongoose.connect(process.env.MONGO_URL,{
		 useNewUrlParser : true,
		 useUnifiedTopology : true
	}).then(()=>{
		 console.log('Mongodb Database Connected')
	}).catch(error=>{
		 console.log(error)
	})
}



app.use(cors());
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);

const PORT = process.env.PORT || 3001;

databaseConnect();

app.listen(PORT, function () {
	console.log(`Backend running on port: ${PORT}`);
});
