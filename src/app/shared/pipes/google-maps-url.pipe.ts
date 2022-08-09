import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "googlemapsurl",
})
export class GoogleMapsUrlPipe implements PipeTransform {
	private readonly mapsSearchUrl: string =
		"https://www.google.com/maps/search/?api=1&query=";
	private readonly mapsDirectionsUrl: string =
		"https://www.google.com/maps/dir/?api=1&destination=";

	transform(
		address: string | undefined,
		type: GoogleMapsUrlTypes = GoogleMapsUrlTypes.SEARCH
	): string {
		if (!address) {
			return "";
		}
		switch (type) {
			case GoogleMapsUrlTypes.SEARCH:
				return `${this.mapsSearchUrl}${encodeURIComponent(address)}`;
			case GoogleMapsUrlTypes.DIRECTIONS:
				return `${this.mapsDirectionsUrl}${encodeURIComponent(
					address
				)}`;
			default:
				return address;
		}
	}
}

export enum GoogleMapsUrlTypes {
	SEARCH,
	DIRECTIONS,
}
