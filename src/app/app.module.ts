import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";

// components
import { TestComponent } from "./test/test.component";
import { AppComponent } from "./app.component";
import { AuthModule } from "@auth0/auth0-angular";

@NgModule({
	declarations: [AppComponent, TestComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		AuthModule.forRoot({
			domain: "domain",
			clientId: "clientId",
			authorizationParams: {
				redirect_uri: window.location.origin,
			},
		}),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
