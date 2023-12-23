import { Component, Inject, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MAT_SNACK_BAR_DATA } from "@angular/material/snack-bar";

@Component({
	selector: "app-toast",
	templateUrl: "./toast.component.html",
})
export class ToastComponent implements OnInit {
	constructor(
		@Inject(MAT_SNACK_BAR_DATA)
		public data: { message: string; needSubscribeButton?: boolean }
	) {}

	ngOnInit(): void {}

	openUserDialog() {
		// TODO: open login page
		console.log("need user");
	}
}
