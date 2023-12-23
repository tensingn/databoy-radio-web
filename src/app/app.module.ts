import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { environment as env } from "src/environments/environment";

// components
import { TestComponent } from "./test/test.component";
import { AppComponent } from "./app.component";
import { AuthHttpInterceptor, AuthModule } from "@auth0/auth0-angular";
import { CALENDAR_EVENT_ROUTE_DEFINITIONS } from "./events/auth/calendar-events.auth";
import { USER_ROUTE_DEFINITIONS } from "./shared/auth/user.auth";
import {
	RELEASES_ROUTE_DEFINITIONS,
	TRACKS_ROUTE_DEFINITIONS,
} from "./tracks/auth/tracks.auth";

@NgModule({
	declarations: [AppComponent, TestComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		AuthModule.forRoot({
			...env.auth,
			authorizationParams: {
				redirect_uri: window.location.origin,
				audience: env.auth.audience,
			},
			httpInterceptor: {
				allowedList: [
					...CALENDAR_EVENT_ROUTE_DEFINITIONS,
					...USER_ROUTE_DEFINITIONS,
					...TRACKS_ROUTE_DEFINITIONS,
					...RELEASES_ROUTE_DEFINITIONS,
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
