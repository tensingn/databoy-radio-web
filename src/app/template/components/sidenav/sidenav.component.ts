import { Component, OnInit } from "@angular/core";
import {
	BreakpointObserver,
	Breakpoints,
	BreakpointState,
} from "@angular/cdk/layout";
import { UserService } from "src/app/shared/services/user.service";

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
		private userService: UserService
	) {}

	ngOnInit(): void {
		this.breakPointObserver
			.observe([Breakpoints.Small, Breakpoints.XSmall])
			.subscribe((state: BreakpointState) => {
				this.screenIsSmall = state.matches;
			});

		this.breakPointObserver
			.observe([Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall])
			.subscribe((state: BreakpointState) => {
				this.screenIsMediumOrLess = state.matches;
			});

		if (!this.userService.userID) {
			this.openDialog();
		}
	}

	openDialog() {
		// TODO: open login page
		console.log("need user");
	}
}
