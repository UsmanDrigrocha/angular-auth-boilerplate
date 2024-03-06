import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.css'],
})
export class VerifyAccountComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private utilityService: UtilityService,
    private router: Router
  ) {}

  token = '';
  ngOnInit(): void {
    this.route.params.subscribe((token: any) => {
      this.token = token.token;
      this.verifyAccount(this.token);
    });
  }

  verifyAccount(token: any) {
    console.log(token);
    this.auth.verifyAccount(token).subscribe(
      (data: any) => {
        console.log(data);
        this.utilityService.showSnackbar(data.Message);
        this.router.navigate(['/dashboard']);
      },
      (error: any) => {
        this.utilityService.showSnackbar(error.error.Message);
      }
    );
  }
}
