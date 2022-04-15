import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { SubscriptionService } from "../../services/subscription.service";

export interface SubscriptionDialogData {
	email: string;
}

@Component({
	selector: "app-subscription-dialog",
	templateUrl: "./subscription-dialog.component.html",
	styleUrls: ["./subscription-dialog.component.scss"],
})
export class SubscriptionDialogComponent implements OnInit {
	constructor(
		public dialogRef: MatDialogRef<SubscriptionDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: SubscriptionDialogData,
		private subscriptionService: SubscriptionService
	) {}
	email = new FormControl("", [Validators.required, Validators.email]);
	httpComplete: boolean = true;
	subscriberId: number;

	ngOnInit(): void {}

	onNoClick(): void {
		this.dialogRef.close();
	}

	onOkClick(): void {
		this.subscribe();
	}

	getErrorMessage() {
		if (this.email.hasError("required")) {
			return "You must enter a value";
		}

		return this.email.hasError("email") ? "Not a valid email" : "";
	}

	subscribe() {
		if (this.email.valid) {
			let subscription = this.subscriptionService
				.addSubscriber(this.email.value)
				.subscribe({
					next: (subscriberId) => {
						this.subscriberId = subscriberId;
					},
					error: () => {
						this.httpComplete = true;
						subscription.unsubscribe();
						//this.openToast("Unable to subscribe.");
					},
					complete: () => {
						this.httpComplete = true;
						subscription.unsubscribe();
						this.dialogRef.close();
						//this.openToast("Release liked.");
					},
				});
		}
	}
}
