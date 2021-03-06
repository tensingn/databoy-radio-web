import { Component, OnInit } from "@angular/core";
import {
	BreakpointObserver,
	Breakpoints,
	BreakpointState,
} from "@angular/cdk/layout";
import { SubscriptionDialogComponent } from "../../../shared/components/subscription-dialog/subscription-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { SubscriptionService } from "src/app/shared/services/subscription.service";

@Component({
	selector: "app-sidenav",
	templateUrl: "./sidenav.component.html",
	styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent implements OnInit {
	showFiller = false;
	screenIsSmall: boolean = true;
	screenIsMediumOrLess: boolean = false;
	isOpened: boolean = false;
	email: string;

	constructor(
		private breakPointObserver: BreakpointObserver,
		private dialog: MatDialog,
		private subscriptionService: SubscriptionService
	) {}

	ngOnInit(): void {
		this.breakPointObserver
			.observe([Breakpoints.Small, Breakpoints.XSmall])
			.subscribe((state: BreakpointState) => {
				this.screenIsSmall = state.matches;
			});

		this.breakPointObserver
			.observe([
				Breakpoints.Medium,
				Breakpoints.Small,
				Breakpoints.XSmall,
			])
			.subscribe((state: BreakpointState) => {
				this.screenIsMediumOrLess = state.matches;
			});

		if (!this.subscriptionService.getSubscriberId()) {
			this.openDialog();
		}
	}

	openDialog() {
		const dialogRef = this.dialog.open(SubscriptionDialogComponent);
	}
}
