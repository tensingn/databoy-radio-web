import {
	AfterViewInit,
	Component,
	ComponentRef,
	Inject,
	OnInit,
	ViewChild,
	ViewContainerRef,
} from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { EventExpansionPanelComponent } from "src/app/shared/components/event-expansion-panel/event-expansion-panel.component";
import { CalendarEvent } from "../../interfaces/calendar-event";

@Component({
	selector: "events-event-dialog-content",
	templateUrl: "./event-dialog-content.component.html",
	styleUrls: ["./event-dialog-content.component.scss"],
})
export class EventDialogContentComponent implements OnInit {
	@ViewChild("container", { read: ViewContainerRef })
	container: ViewContainerRef;

	date: Date;

	constructor(
		@Inject(MAT_DIALOG_DATA)
		public data: { events: Array<CalendarEvent>; date: Date }
	) {}

	ngOnInit(): void {
		this.date = this.data.date;

		if (this.data.events.length) {
			// lazy loading event expansion panel because of bug
			// with expansion panel always open for a second
			// upon opening a dialog
			let panel: ComponentRef<EventExpansionPanelComponent> =
				this.container.createComponent(EventExpansionPanelComponent);
			panel.instance.events = this.data.events;
			panel.instance.ngOnInit = () => {};
		}
	}
}
