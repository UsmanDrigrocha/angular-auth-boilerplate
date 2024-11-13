import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { env } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private router: Router, private cookieService: CookieService) { }

  // Method to navigate to the component dynamically
  navigateTo(componentName: string): void {
    this.router.navigate([`/${componentName}`]);
  }

  // Save token in cookies
  saveToken(token: string): void {
    this.cookieService.set(env.authTokenName, token, env.cookiesExpiryDays);
  }

  // Get token from cookies
  getToken(): string | null {
    return this.cookieService.get(env.authTokenName) || null;
  }

  // Delete token from cookies
  deleteToken(): void {
    this.cookieService.delete(env.authTokenName);
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;  // Returns true if token exists, false otherwise
  }

}
