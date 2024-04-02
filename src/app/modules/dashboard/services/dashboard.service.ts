import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { ResponseProducts } from '../Products';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private apiURL = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getProducts() {
    return this.http.get<ResponseProducts>(`${this.apiURL}products`, {
      headers: {
        Authorization: 'Bearer ' + this.authService.getToken(),
      },
    });
  }
}
