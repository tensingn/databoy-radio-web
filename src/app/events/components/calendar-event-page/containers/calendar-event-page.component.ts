import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CalendarEvent } from "src/app/events/interfaces/calendar-event";
import { CalendarEventPageService } from "../services/calendar-event-page.service";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "events-calendar-event-page",
	templateUrl: "./calendar-event-page.component.html",
})
export class CalendarEventPageComponent implements OnInit {
	calendarEvent: Observable<CalendarEvent>;
	isGoing: Observable<boolean>;
	loading: Observable<boolean>;

	constructor(
		private calendarEventPageService: CalendarEventPageService,
		private route: ActivatedRoute
	) {
		this.calendarEvent = this.calendarEventPageService.calendarEvent;
		this.isGoing = this.calendarEventPageService.isGoing;
		this.loading = this.calendarEventPageService.loading;
	}

	ngOnInit(): void {
		this.route.paramMap.subscribe((params) => {
			let paramID = params.get("id");

			if (paramID) {
				this.calendarEventPageService.initialize(paramID);
			}
		});
	}

	onGoingClicked() {
		this.calendarEventPageService.updateGoing();
	}
}
