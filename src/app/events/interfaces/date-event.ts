import { CalendarEvent } from "./calendar-event";

export interface DateEvent {
	date: Date;
	calendarEvents: CalendarEvent[];
}
