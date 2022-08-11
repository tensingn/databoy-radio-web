import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute } from "@angular/router";
import { LikeToastComponent } from "src/app/shared/components/like-toast/like-toast.component";
import { SubscriptionService } from "src/app/shared/services/subscription.service";
import { CalendarEvent } from "../../interfaces/calendar-event";
import { CalendarEventService } from "../../services/calendar-event.service";
import { CalendarEventSubscriptionService } from "../../services/calendar-event-subscription.service";
import { CalendarEventSubscription } from "../../interfaces/calendar-event-subscription";

@Component({
	selector: "events-event-page",
	templateUrl: "./event-page.component.html",
	styleUrls: ["./event-page.component.scss"],
})
export class EventPageComponent implements OnInit {
	calendarEvent: CalendarEvent | undefined;
	isGoing: boolean = false;
	httpComplete: boolean = true;
	toastDuration: number = 3;
	subscriberId: number;
	calendarEventSubscription: CalendarEventSubscription | undefined;
	screenIsSmallOrLess: boolean = false;

	constructor(
		private route: ActivatedRoute,
		private calendarEventService: CalendarEventService,
		private calendarEventSubscriptionService: CalendarEventSubscriptionService,
		private subscriptionService: SubscriptionService,
		private toast: MatSnackBar
	) {}

	ngOnInit(): void {
		this.subscriberId = this.subscriptionService.getSubscriberId();

		let stateId = window.history.state.calendarEventId;

		this.route.paramMap.subscribe((params) => {
			let paramId = Number(params.get("id"));

			if (stateId !== paramId) {
				this.getCalendarEvent(paramId);
			} else {
				this.calendarEvent = window.history.state;
				this.getCalendarEventSubscription();
			}
		});
	}

	getCalendarEvent(calendarEventId: number): void {
		let subscription = this.calendarEventService
			.getCalendarEventById(calendarEventId)
			.subscribe({
				next: (calendarEvent) => {
					this.calendarEvent = calendarEvent;
					this.getCalendarEventSubscription();
				},
				error: () => {
					subscription.unsubscribe();
				},
				complete: () => {
					subscription.unsubscribe();
				},
			});
	}

	getCalendarEventSubscription() {
		if (!this.calendarEvent || this.subscriberId <= 0) {
			return;
		}

		this.calendarEventSubscriptionService
			.getCalendarEventSubscription(this.calendarEvent, this.subscriberId)
			.subscribe({
				next: (calendarEventSubscription) => {
					this.calendarEventSubscription = calendarEventSubscription;
					this.isGoing = calendarEventSubscription
						? calendarEventSubscription.isGoing
						: false;
				},
			});
	}

	updateSubscriberGoing() {
		if (!this.calendarEvent) {
			return;
		}

		this.httpComplete = false;
		let subscription = this.calendarEventSubscriptionService
			.addCalendarEventSubscription(
				this.calendarEvent,
				this.subscriberId,
				!this.isGoing
			)
			.subscribe({
				next: () => {
					this.isGoing = !this.isGoing;

					if (this.calendarEvent) {
						if (this.isGoing) {
							this.calendarEvent.subscribersGoing++;
						} else {
							this.calendarEvent.subscribersGoing--;
						}
					}
				},
				error: () => {
					this.httpComplete = true;
					subscription.unsubscribe();
					this.handleErrorToast();
				},
				complete: () => {
					this.httpComplete = true;
					subscription.unsubscribe();
					this.handleSuccessToast();
				},
			});
	}

	openToast(message: string, needSubscribeButton?: boolean) {
		this.toast.openFromComponent(LikeToastComponent, {
			duration: this.toastDuration * 1000,
			data: {
				message,
				needSubscribeButton,
			},
		});
	}

	handleErrorToast() {
		if (!this.subscriptionService.getSubscriberId()) {
			this.openToast(
				"You must be subscribed to dbr to subscribe to an event.",
				true
			);
		} else {
			this.openToast("Unable to process button click.");
		}
	}

	handleSuccessToast() {
		if (this.isGoing) {
			this.openToast("You are going to this event!");
		} else {
			this.openToast("You are no longer going to this event.");
		}
	}
}
