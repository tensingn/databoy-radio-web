import { Subscriber } from "src/app/shared/interfaces/subscriber";
import { CalendarEvent } from "./calendar-event";

export interface CalendarEventSubscription {
	calendarEvent: CalendarEvent;
	subscriber: Subscriber;
	isGoing: boolean;
}
