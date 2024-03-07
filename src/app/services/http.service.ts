import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  apiBaseUrl = 'http://localhost:8080/api/user/';

  getUserProfile() {
    return this.http.get(this.apiBaseUrl + '/user-profile');
  }

  updateProfile(data: any) {
    return this.http.put(this.apiBaseUrl + 'user-profile', { experience:data.experience,industry:data.industry,role:data.role,projects:data.projects });
  }
}
