import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiBaseUrl = 'http://localhost:8080/api/user/';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(this.apiBaseUrl + 'login', { email, password });
  }

  register(email: string, password: string, name: string): Observable<any> {
    return this.http.post(this.apiBaseUrl + 'register', {
      email,
      password,
      name,
    });
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  get isAuthenticatedStatus(): boolean {
    return this.isAuthenticated();
  }

  verifyAccount(token: string) {
    return this.http.get(this.apiBaseUrl + `verify-account/${token}`);
  }
}
