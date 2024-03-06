import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private utilityService: UtilityService,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  user = {
    name: '',
    email: '',
    password: '',
  };

  register() {
    if (!this.user.email || !this.user.password) {
      return this.utilityService.showSnackbar('Enter All Fields !');
    }
    if (!this.utilityService.isValidEmail(this.user.email)) {
      return this.utilityService.showSnackbar('Invalid email format');
    }

    this.authService
      .register(this.user.email, this.user.password, this.user.name)
      .subscribe(
        (data: any) => {
          if (data.status === false) {
            return this.utilityService.showSnackbar(data.errors[0]);
          }

          this.router.navigate(['/dashboard']);
        },
        (error: any) => {
          return this.utilityService.showSnackbar(
            'Error occurred while register'
          );
        }
      );
  }

  // ---------------------------------------------- Password Logic ----------------------------------------------

  passwordFieldType: string = 'password';

  togglePasswordVisibility() {
    this.passwordFieldType =
      this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  navigate(url: string) {
    this.router.navigate([`/${url}`]);
  }
}
