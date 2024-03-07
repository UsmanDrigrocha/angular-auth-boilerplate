import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  isMenuOpen = false;

  changeClass() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    localStorage.clear();
    this.route.navigate(['/login']);
  }
}
