import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userProfile: any;
  editing: boolean = false;

  constructor(
    private userService: HttpService,
    private utilityService: UtilityService
  ) {}

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile() {
    this.utilityService.showSnackbar('Get Profile');
    // this.userService.getUserProfile().subscribe((data: any) => {
      // this.userProfile = data;
    // });
    this.userProfile = {
      name:"usman",
      experience:"19"
    };
  }

  editProfile() {
    this.editing = true;
  }

  updateProfile() {
    this.utilityService.showSnackbar('updating profile');
    // this.userService.updateUserProfile(this.userProfile).subscribe(() => {
    //   this.editing = false;
    //   // Optionally, you can update the user profile data after successful update
    //   // this.getUserProfile();
    // });
  }
}
