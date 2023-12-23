import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
	selector: "events-going-button",
	templateUrl: "./going-button.component.html",
	styleUrls: ["./going-button.component.scss"],
})
export class GoingButtonComponent {
	@Output() goingClicked = new EventEmitter();
	@Input() isClicked: boolean = false;
	@Input() numGoing: number = 0;

	onClick(): void {
		this.goingClicked.emit();
	}
}
