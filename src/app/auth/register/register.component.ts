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
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/dashboard']);
    }
  }

  user = {
    name: '',
    email: '',
    password: '',
  };

  register() {
    if (!this.user.email || !this.user.password || !this.user.name) {
      return this.utilityService.showSnackbar('Enter All Fields !');
    }

    if (this.user.password.length < 5) {
      return this.utilityService.showSnackbar(
        'Password length must be greater than 5'
      );
    }

    if (!this.utilityService.isValidEmail(this.user.email)) {
      return this.utilityService.showSnackbar('Invalid email format');
    }

    this.authService
      .register(this.user.email, this.user.password, this.user.name)
      .subscribe(
        (data: any) => {
          this.emptyRegisterFrom();
          this.utilityService.showSnackbar(data.Message);
        },
        (error: any) => {
          this.emptyRegisterFrom();

          if (error.error.Message) {
            return this.utilityService.showSnackbar(error.error.Message);
          }
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

  openGmail() {
    window.open(
      'https://mail.google.com/mail/u/0/#search/business.mentor.ai%40gmail.com',
      '_blank'
    );
  }

  emptyRegisterFrom() {
    this.user.name = '';
    this.user.email = '';
    this.user.password = '';
  }
}
