import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StorePageComponent } from "./store-page/store-page.component";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatDividerModule } from "@angular/material/divider";
import { SharedModule } from "../shared/shared.module";
import { ProductService } from "./services/product-service";
import { ProductListModule } from "./components/product-list/product-list.modules";

const routes: Routes = [
	{ path: "", component: StorePageComponent },
	{ path: "**", redirectTo: "" },
];

@NgModule({
	declarations: [StorePageComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		MatListModule,
		MatCardModule,
		MatButtonModule,
		MatSelectModule,
		MatDialogModule,
		MatInputModule,
		FormsModule,
		ReactiveFormsModule,
		SharedModule,
		MatTooltipModule,
		MatDividerModule,
		ProductListModule,
	],
	providers: [ProductService],
})
export class StoreModule {}
