const router = require("express").Router();
const stripeAPI = require("stripe")(process.env.STRIPE_SECRET_KEY);
const {getProduct} = require('./product')

router.post("/", async (req, res) =>{
	const domainUrl = process.env.WEB_APP_URL;
	const  line_items = req.body;
	//check req body has line items and email

	if (!line_items) {
		return res
			.status(400)
			.json({ error: "missing required session parameters" });
	}

	const storeItems = await Promise.all(line_items.map(async item =>{
		const itemDetail = await getProduct(item._id)
		console.log(itemDetail)
		return{
			price_data:{
				currency: 'aud',
				product_data:{
					name: itemDetail.title,
					images: [itemDetail.img]
				},
				unit_amount: itemDetail.price*100,
			},
			quantity: item.quantity,
		}
	}))

	try {
		console.log(storeItems)
		const session = await stripeAPI.checkout.sessions.create({
			payment_method_types: ["card"],
			mode: "payment",
			shipping_address_collection: { allowed_countries: ["AU", "NZ", "US"] },
			line_items: storeItems,
			success_url: `${domainUrl}/success`,
			// success_url: `${domainUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${domainUrl}/cancel`,
		});

		res.send({url: session.url});
	} catch (error) {
		console.log(error);
		res
			.status(400)
			.json({ error: " An error occured, unable to create session" });
	}
})
module.exports = router;
