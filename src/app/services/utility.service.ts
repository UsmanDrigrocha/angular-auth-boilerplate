import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor(private snackBar: MatSnackBar) {}

  isValidEmail(email: string): boolean {
    const emailRegex: RegExp =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  showSnackbar(
    message: string,
    duration: number = 3000,
    position: MatSnackBarVerticalPosition = 'top'
  ): void {
    this.snackBar.open(message, 'Close', {
      duration: duration,
      verticalPosition: position,
    });
  }
}
