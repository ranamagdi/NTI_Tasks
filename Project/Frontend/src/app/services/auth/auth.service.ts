import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  baseUrl='http:///localhost:3000/users/'
  isLogin=false
  constructor(private http:HttpClient) { }

  login(obj:any):Observable<any>{
    return this.http.post(`${this.baseUrl}login`,obj)
  }

  logout(obj:any):Observable<any>{
    return this.http.post(`${this.baseUrl}logout`,obj)
  }

  register(obj:any):Observable<any>{
    return this.http.post(`${this.baseUrl}add`,obj)
  }

  registerAdmin(obj:any):Observable<any>{
    return this.http.post(`${this.baseUrl}addAdmin`,obj)
  }


}
