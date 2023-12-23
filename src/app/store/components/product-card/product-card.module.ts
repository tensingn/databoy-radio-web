import { NgModule } from "@angular/core";
import { ProductCardViewComponent } from "./views/product-card-view.component";
import { ProductCardComponent } from "./containers/product-card.component";
import { SharedModule } from "src/app/shared/shared.module";
import { MatCardModule } from "@angular/material/card";

@NgModule({
	declarations: [ProductCardViewComponent, ProductCardComponent],
	imports: [SharedModule, MatCardModule],
	exports: [ProductCardComponent],
})
export class ProductCardModule {}
