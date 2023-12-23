import { ApiRouteDefinition } from "@auth0/auth0-angular";
import { environment as env } from "src/environments/environment";

export const TRACKS_ROUTE_DEFINITIONS: Array<ApiRouteDefinition> = [
	{
		uri: `${env.apiBaseUrl}tracks/*`,
		httpMethod: "POST",
	},
	{
		uri: `${env.apiBaseUrl}tracks/*`,
		httpMethod: "PATCH",
	},
	{
		uri: `${env.apiBaseUrl}tracks/*`,
		httpMethod: "DELETE",
	},
	{
		uriMatcher: generateUriMatcher([`${env.apiBaseUrl}tracks`, "likes"], []),
		httpMethod: "GET",
	},
	{
		uriMatcher: generateUriMatcher([`${env.apiBaseUrl}tracks`], ["likes"]),
		httpMethod: "GET",
		allowAnonymous: true,
	},
];

export const RELEASES_ROUTE_DEFINITIONS: Array<ApiRouteDefinition> = [
	{
		uri: `${env.apiBaseUrl}releases/*`,
		httpMethod: "POST",
	},
	{
		uri: `${env.apiBaseUrl}releases/*`,
		httpMethod: "PATCH",
	},
	{
		uri: `${env.apiBaseUrl}releases/*`,
		httpMethod: "DELETE",
	},
	{
		uriMatcher: generateUriMatcher([`${env.apiBaseUrl}releases`, "likes"], []),
		httpMethod: "GET",
	},
	{
		uriMatcher: generateUriMatcher([`${env.apiBaseUrl}release`], ["likes"]),
		httpMethod: "GET",
		allowAnonymous: true,
	},
];

function generateUriMatcher(
	includeWords: Array<string>,
	excludeWords: Array<string>
): (uri: string) => boolean {
	return (uri) => {
		let ret =
			includeWords.length &&
			includeWords.every((i) => uri.includes(i)) &&
			(!excludeWords.length || excludeWords.every((e) => !uri.includes(e)));
		return ret;
	};
}
