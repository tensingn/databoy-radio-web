import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ToastComponent } from "../components/like-toast/toast.component";

@Injectable()
export class ToastService {
	private _toastDuration: number = 3;

	constructor(private toast: MatSnackBar) {}

	openToast(
		message: string,
		needSubscribeButton: boolean = false,
		duration: number = this._toastDuration
	) {
		this.toast.openFromComponent(ToastComponent, {
			duration: duration * 1000,
			data: {
				message,
				needSubscribeButton,
			},
		});
	}
}
