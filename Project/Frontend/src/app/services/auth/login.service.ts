import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  baseUrl='http:///localhost:3000/users'
  constructor(private http:HttpClient) { }

  login(obj:any):Observable<any>{
    return this.http.post(`${this.baseUrl}login`,obj)
  }
}
