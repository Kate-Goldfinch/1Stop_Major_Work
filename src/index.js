import "bootstrap/dist/css/bootstrap.min.css";
import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

ReactDOM.render(
	<Auth0Provider
		domain="dev-vy3a256hkmnp3qm0.us.auth0.com"
		clientId="L1zoxcy9pj4Yqf2mpv4YXwRc7T51UO8W"
		connection="MongoDB"
		redirectUri={window.location.origin}
	>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Auth0Provider>,
	document.getElementById("root")
);
