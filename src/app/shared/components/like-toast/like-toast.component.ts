import { Component, Inject, OnInit } from "@angular/core";
import { MAT_SNACK_BAR_DATA } from "@angular/material/snack-bar";

@Component({
	selector: "app-like-toast",
	templateUrl: "./like-toast.component.html",
	styleUrls: ["./like-toast.component.scss"],
})
export class LikeToastComponent implements OnInit {
	constructor(
		@Inject(MAT_SNACK_BAR_DATA)
		public data: { message: string }
	) {}

	ngOnInit(): void {}
}
