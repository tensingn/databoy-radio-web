import { NgModule } from "@angular/core";
import { AuthButtonComponent } from "./components/auth-button/auth-button.component";
import { CommonModule } from "@angular/common";
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
	declarations: [AuthButtonComponent, UserProfileComponent],
	exports: [AuthButtonComponent, UserProfileComponent],
	imports: [CommonModule, MatIconModule, MatButtonModule],
})
export class AuthModule {}
