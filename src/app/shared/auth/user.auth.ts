import { ApiRouteDefinition, HttpMethod } from "@auth0/auth0-angular";
import { environment as env } from "src/environments/environment";

export const USER_ROUTE_DEFINITIONS: Array<ApiRouteDefinition> = [
	{
		uri: `${env.apiBaseUrl}users/*`,
		httpMethod: HttpMethod.Get,
	},
	{
		uri: `${env.apiBaseUrl}users/*`,
		httpMethod: HttpMethod.Post,
	},
	{
		uri: `${env.apiBaseUrl}users/*`,
		httpMethod: HttpMethod.Patch,
	},
	{
		uri: `${env.apiBaseUrl}users/*`,
		httpMethod: HttpMethod.Delete,
	},
];
