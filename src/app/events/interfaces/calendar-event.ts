export interface CalendarEvent {
	calendarEventId: number;
	title: string;
	startTime: Date;
	endTime: Date;
	description: string;
	type: CalendarEventType;
}

export enum CalendarEventType {
	RELEASE,
	SHOW,
	STREAM,
}
