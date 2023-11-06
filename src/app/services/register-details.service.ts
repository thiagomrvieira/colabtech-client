import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterDetailsService {
  private apiUrl = 'http://127.0.0.1:8000/api/v1/employees';

  constructor(private http: HttpClient) {}

  getRegisterDetails(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
