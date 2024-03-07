import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { UtilityService } from '../services/utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userProfile: any;
  constructor(
    private http: HttpService,
    private utilityService: UtilityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile() {
    this.http.getUserProfile().subscribe(
      (data: any) => {
        this.userProfile = data.Profile;
      },
      (error: any) => {
        console.log(error.message);
      }
    );
  }

  updateProfile(): void {
    if (
      !this.userProfile.projects ||
      !this.userProfile.role ||
      !this.userProfile.experience ||
      !this.userProfile.industry
    ) {
      return this.utilityService.showSnackbar('Enter All Fields');
    }

    this.http.updateProfile(this.userProfile).subscribe(
      (data: any) => {
        this.utilityService.showSnackbar('Profile Updated Successfully !');
        this.router.navigate(['/dashboard']);
      },
      (error: any) => {
        this.utilityService.showSnackbar('Error Updating Profile!');
      }
    );
  }
}
