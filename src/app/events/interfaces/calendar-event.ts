import { CalendarEventLocation } from "./calendar-event-location";

export interface CalendarEvent {
	calendarEventId: number;
	title: string;
	startTime: Date;
	endTime: Date;
	description: string;
	longDescription: string;
	descriptionImageUrl: string;
	type: CalendarEventType;
	location: CalendarEventLocation;
}

export enum CalendarEventType {
	RELEASE,
	SHOW,
	STREAM,
}
