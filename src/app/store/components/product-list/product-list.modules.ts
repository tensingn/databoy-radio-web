import { NgModule } from "@angular/core";
import { ProductListViewComponent } from "./views/product-list-view.component";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { ProductListComponent } from "./containers/product-list.component";
import { ProductListService } from "./services/product-list.service";
import { ProductCardModule } from "../product-card/product-card.module";

@NgModule({
	declarations: [ProductListViewComponent, ProductListComponent],
	imports: [CommonModule, MatInputModule, MatSelectModule, ProductCardModule],
	providers: [ProductListService],
	exports: [ProductListComponent],
})
export class ProductListModule {}
