import { Component, Inject, OnInit } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";
import { DOCUMENT } from "@angular/common";
import {
	BreakpointObserver,
	BreakpointState,
	Breakpoints,
} from "@angular/cdk/layout";

@Component({
	selector: "app-auth-button",
	templateUrl: "auth-button.component.html",
	styles: [],
})
export class AuthButtonComponent implements OnInit {
	screenIsMediumOrLess: boolean = false;

	constructor(
		@Inject(DOCUMENT) public document: Document,
		public auth: AuthService,
		private breakpointObserver: BreakpointObserver
	) {}

	ngOnInit() {
		this.breakpointObserver
			.observe([
				Breakpoints.Medium,
				Breakpoints.Small,
				Breakpoints.XSmall,
			])
			.subscribe((state: BreakpointState) => {
				this.screenIsMediumOrLess = state.matches;
			});
	}
}
