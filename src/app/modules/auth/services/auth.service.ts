import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseAuth } from '../Auth';
import { RegisterInfo } from '../Register';
import { LoginInfo } from '../Login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiURL = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {}

  register(registerInfo: RegisterInfo) {
    return this.http.post<ResponseAuth>(`${this.apiURL}register`, registerInfo);
    // mas correcto
  }

  login(loginInfo: LoginInfo) {
    return this.http.post<ResponseAuth>(`${this.apiURL}login`, loginInfo);
  }

  saveAuthInfo(info: ResponseAuth) {
    localStorage.setItem('token', info.data.token);
    localStorage.setItem('user', JSON.stringify(info.data.user));
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isAuthenticated() {
    return !!localStorage.getItem('token');
  }

  logOut() {
    localStorage.clear();
  }
}
