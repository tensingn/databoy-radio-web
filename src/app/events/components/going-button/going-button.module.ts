import { NgModule } from "@angular/core";
import { GoingButtonComponent } from "./going-button.component";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
	imports: [MatButtonModule],
	declarations: [GoingButtonComponent],
	providers: [],
	exports: [GoingButtonComponent],
})
export class GoingButtonModule {}
