import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  apiBaseUrl = 'http://localhost:3001/api/';

  getUsers() {
    return this.http.get(this.apiBaseUrl + 'admin/get-all-users');
  }

  getUserOrders(body: string) {
    return this.http.post(this.apiBaseUrl + 'admin/get-user-cards', {
      id: body,
    });
  }

  fetchData(page: number, pageSize: number): any {
    return this.http.get(
      `${this.apiBaseUrl}admin/get-all-users?page=${page}&limit=${pageSize}`
    );
  }
}
