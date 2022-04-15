import { Component, Inject, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MAT_SNACK_BAR_DATA } from "@angular/material/snack-bar";
import { SubscriptionDialogComponent } from "../subscription-dialog/subscription-dialog.component";

@Component({
	selector: "app-like-toast",
	templateUrl: "./like-toast.component.html",
	styleUrls: ["./like-toast.component.scss"],
})
export class LikeToastComponent implements OnInit {
	constructor(
		@Inject(MAT_SNACK_BAR_DATA)
		public data: { message: string; needSubscribeButton?: boolean },
		private dialog: MatDialog
	) {}

	ngOnInit(): void {}

	openSubscriptionDialog() {
		const dialogRef = this.dialog.open(SubscriptionDialogComponent);
	}
}
