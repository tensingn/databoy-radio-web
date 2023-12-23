import { Injectable, OnDestroy } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { BehaviorSubject, Observable, Subject, takeUntil } from "rxjs";
import { CalendarEvent } from "src/app/events/interfaces/calendar-event";
import { GoingService } from "src/app/events/services/going.service";
import { CalendarEventService } from "src/app/events/services/calendar-event.service";
import { ToastComponent } from "src/app/shared/components/like-toast/toast.component";
import { UserService } from "src/app/shared/services/user.service";
import { AddRemoveGoingResponse } from "src/app/events/interfaces/add-remove-going-response";

@Injectable()
export class CalendarEventPageService implements OnDestroy {
	calendarEvent: Observable<CalendarEvent>;

	isGoing: Observable<boolean>;

	loading: Observable<boolean>;

	private _calendarEvent = new BehaviorSubject<CalendarEvent>(null);

	private _isGoing = new BehaviorSubject<boolean>(false);

	private _loading = new BehaviorSubject<boolean>(false);

	private _userID: string | null = null;

	private _toastDuration: number = 3;

	private unsubscribe = new Subject<void>();

	constructor(
		private calendarEventService: CalendarEventService,
		private goingService: GoingService,
		private userService: UserService,
		private toast: MatSnackBar
	) {
		this.calendarEvent = this._calendarEvent.asObservable();
		this.isGoing = this._isGoing.asObservable();
		this.loading = this._loading.asObservable();
	}

	initialize(calendarEventID: string): void {
		const sub = this.userService._user?.sub;
		if (sub && sub.split("|").length == 2) {
			this._userID = sub.split("|")[1];
		}

		let stateID = window.history.state.id;

		if (calendarEventID) {
			if (stateID !== calendarEventID) {
				this.getCalendarEvent(calendarEventID);
			} else {
				const calendarEvent: CalendarEvent = window.history.state;
				this._calendarEvent.next(calendarEvent);
				this.getGoing();
			}
		}
	}

	ngOnDestroy() {
		this.unsubscribe.next();
	}

	private getCalendarEvent(calendarEventID: string): void {
		this.calendarEventService
			.getCalendarEventByID(calendarEventID)
			.pipe(takeUntil(this.unsubscribe))
			.subscribe({
				next: (calendarEvent) => {
					this._calendarEvent.next(calendarEvent);
					this.getGoing();
				},
			});
	}

	private getGoing() {
		if (!this._calendarEvent.value || !this._userID) {
			return;
		}

		this.goingService
			.isGoing(this._calendarEvent.value.id, this._userID)
			.subscribe({
				next: (going) => {
					this._isGoing.next(going);
				},
				error: (e) => {
					this._isGoing.next(false);
				},
			});
	}

	updateGoing() {
		if (!this._calendarEvent.value || !this._userID) {
			this.handleErrorToast();
			return;
		}

		this._loading.next(true);

		const goingObs = this._isGoing.value
			? this.goingService.removeGoing(
					this._calendarEvent.value.id,
					this._userID
			  )
			: this.goingService.addGoing(this._calendarEvent.value.id, this._userID);

		goingObs.subscribe({
			next: (res: AddRemoveGoingResponse) => {
				this._isGoing.next(!this._isGoing.value);

				const calendarEvent = this._calendarEvent.value;
				calendarEvent.numGoing = res.numGoing;
				this._calendarEvent.next(calendarEvent);
			},
			error: () => {
				this._loading.next(false);
				this.handleErrorToast();
			},
			complete: () => {
				this._loading.next(false);
				this.handleSuccessToast();
			},
		});
	}

	private openToast(message: string, needSubscribeButton?: boolean) {
		this.toast.openFromComponent(ToastComponent, {
			duration: this._toastDuration * 1000,
			data: {
				message,
				needSubscribeButton,
			},
		});
	}

	private handleErrorToast() {
		if (!this._userID) {
			this.openToast(
				"You must be a signed in to indicate you are going to an event.",
				true
			);
		} else {
			this.openToast("Unable to process button click.");
		}
	}

	private handleSuccessToast() {
		if (this._isGoing.value) {
			this.openToast("You are going to this event!");
		} else {
			this.openToast("You are no longer going to this event.");
		}
	}
}
