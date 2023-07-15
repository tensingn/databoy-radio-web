import { NgModule } from "@angular/core";
import { AuthButtonComponent } from "./components/auth-button/auth-button.component";
import { CommonModule } from "@angular/common";
import { UserProfileComponent } from "./components/user-profile/user-profile.component";

@NgModule({
	declarations: [AuthButtonComponent, UserProfileComponent],
	exports: [AuthButtonComponent, UserProfileComponent],
	imports: [CommonModule],
})
export class AuthModule {}
