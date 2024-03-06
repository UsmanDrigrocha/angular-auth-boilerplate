import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private router:Router) {}

  ngOnInit(): void {
    const profileCompleted = localStorage.getItem('isProfileCompleted');
    if (profileCompleted === 'false') {
      console.log('Profile is not completed.');
      this.router.navigate(['/profile'])
    } 
  }
}
