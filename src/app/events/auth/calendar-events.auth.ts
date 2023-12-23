import { ApiRouteDefinition } from "@auth0/auth0-angular";
import { environment as env } from "src/environments/environment";

export const CALENDAR_EVENT_ROUTE_DEFINITIONS: Array<ApiRouteDefinition> = [
	{
		uri: `${env.apiBaseUrl}calendar-events/*`,
		httpMethod: "POST",
	},
	{
		uri: `${env.apiBaseUrl}calendar-events/*`,
		httpMethod: "PATCH",
	},
	{
		uri: `${env.apiBaseUrl}calendar-events/*`,
		httpMethod: "DELETE",
	},
	{
		uriMatcher: generateUriMatcher(
			[`${env.apiBaseUrl}calendar-events`, "going"],
			[]
		),
		httpMethod: "GET",
	},
	{
		uriMatcher: generateUriMatcher(
			[`${env.apiBaseUrl}calendar-events`],
			["going"]
		),
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
