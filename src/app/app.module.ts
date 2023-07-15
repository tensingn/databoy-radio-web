import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { environment } from "src/environments/environment";

// components
import { TestComponent } from "./test/test.component";
import { AppComponent } from "./app.component";
import { AuthHttpInterceptor, AuthModule } from "@auth0/auth0-angular";

@NgModule({
	declarations: [AppComponent, TestComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		AuthModule.forRoot({
			domain: environment.domain,
			clientId: environment.clientId,
			authorizationParams: {
				redirect_uri: window.location.origin,
			},
			httpInterceptor: {
				allowedList: [
					{
						uri: `${environment.apiBaseUrl}calendar-events`,
						httpMethod: "GET",
						tokenOptions: {
							authorizationParams: {
								audience: "databoy-radio-api-dev",
								scope: "read:calendar-events",
							},
						},
					},
				],
			},
		}),
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthHttpInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
