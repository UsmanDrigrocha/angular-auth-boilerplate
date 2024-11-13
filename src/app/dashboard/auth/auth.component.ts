import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  // Variables 
  isLoginPage: Boolean = false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });;
  // Variables 

  constructor(private route: ActivatedRoute, private http: HttpService, private utils: UtilsService) { }

  ngOnInit() {
    // Check if the current route is '/login' or '/register'
    this.route.url.subscribe(urlSegment => {
      this.isLoginPage = urlSegment[0]?.path === 'login';
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log('Login attempted with email:', email, 'and password:', password);
      this.http.login(this.loginForm.value).subscribe((res: any) => {
        this.utils.saveToken(res.Token);
        this.utils.navigateTo('dashboard')
      }, (error: any) => {
        if (error.status === 401) {
          return alert('unauthorized !');
        }
        alert('error in login');
      })
    } else {
      alert('invalid')
    }
  }
}
