export interface CalendarEvent {
	id: string;
	startTime: Date;
	endTime: Date;
	title: string;
	type: "releaseevent" | "liveevent" | "streamevent";
	description: string;
	longDescription: string;
	numGoing: number;
}
