import { CalendarEvent } from "src/app/events/interfaces/calendar-event";
import { DateEvent } from "src/app/events/interfaces/date-event";

export function CompareDates(d1: Date, d2: Date, withinDays: number): boolean {
	return (
		Math.abs(d1.getTime() - d2.getTime()) <=
		withinDays * 24 * 60 * 60 * 1000
	);
}

export function IsSameDay(d1: Date, d2: Date): boolean {
	let d1NoTime = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate());
	let d2NoTime = new Date(d2.getFullYear(), d2.getMonth(), d2.getDate());
	return CompareDates(d1NoTime, d2NoTime, 0);
}

export function CalendarEventsToDateEvents(
	calendarEvents: CalendarEvent[]
): DateEvent[] {
	let dateEvents: DateEvent[] = [];

	calendarEvents.forEach((calendarEvent) => {
		let dateEvent = dateEvents.find((de) =>
			IsSameDay(de.date, calendarEvent.startTime)
		);

		if (dateEvent) {
			dateEvent.calendarEvents.push(calendarEvent);
		} else {
			dateEvents.push({
				date: calendarEvent.startTime,
				calendarEvents: [calendarEvent],
			});
		}
	});

	return dateEvents;
}
