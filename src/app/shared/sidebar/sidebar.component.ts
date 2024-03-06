import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private route:Router) {}

  ngOnInit(): void {}

  logout() {
    localStorage.removeItem('token');
    this.route.navigate(['/orders/1234'])
  }

  isSidebarHidden: boolean = false;

  
  toggleSidebar() {
    this.isSidebarHidden = !this.isSidebarHidden;
  }
}
