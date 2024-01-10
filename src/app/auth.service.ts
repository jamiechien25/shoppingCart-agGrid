import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin: boolean = false
  user: string
  authInfo: any

  getAuth() {
    return this._http.get<any>('http://localhost:3000/loadproduct')
  }

  setUser(user: any) {
    this.user = user
  }

  getUser() {
    return this.user
  }

  setAuthInfo(auth: any) {
    this.authInfo = auth
  }

  getAuthInfo() {
    return this.authInfo
  }



  constructor(private _http: HttpClient) { }
}
