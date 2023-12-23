import auth0 from "../../auth0.config.json";

const apiURL = "localhost:3000/api/";

export const environment = {
	production: false,
	apiBaseUrl: apiURL,
	productsBaseUrl: `${apiURL}products/`,
	auth: {
		domain: auth0.domain,
		clientId: auth0.clientID,
		audience: auth0.audience,
	},
};
