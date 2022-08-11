import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
	selector: "events-going-button",
	templateUrl: "./going-button.component.html",
	styleUrls: ["./going-button.component.scss"],
})
export class GoingButtonComponent implements OnInit {
	@Input() peopleGoing: number;
	@Output() clickGoingButtonEvent = new EventEmitter<boolean>();
	@Input() isClicked: boolean = false;
	@Input() subscribersGoing: number = 0;

	constructor() {}

	ngOnInit(): void {}

	updateGoing(): void {
		this.clickGoingButtonEvent.emit();
	}
}
