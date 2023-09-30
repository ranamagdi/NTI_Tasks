import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  baseUrl='http:///localhost:3000/'
  isLogin=false
  constructor(private http:HttpClient) { }

  login(obj:any):Observable<any>{
    return this.http.post(`${this.baseUrl}users/login`,obj)
  }

  logout(obj:any):Observable<any>{
    return this.http.post(`${this.baseUrl}users/logout`,obj)
  }

  register(obj:any):Observable<any>{
    return this.http.post(`${this.baseUrl}users/add`,obj)
  }

  registerAdmin(obj:any):Observable<any>{
    return this.http.post(`${this.baseUrl}users/addAdmin`,obj)
  }
 addProduct(obj:any):Observable<any>{
    return this.http.post(`${this.baseUrl}products/add`,obj)
  }
  Uploadimage(obj:any):Observable<any>{
    return this.http.post(`${this.baseUrl}products/uploadimg`,obj)
  }
  userProfile():Observable<any>{
    return this.http.get(`${this.baseUrl}users/myprofile`)
  }
  updateProfile(id : any , body :any):Observable<any>{
    return this.http.patch(`${this.baseUrl}users/edit/${id}` , body )
  }
  showAllUsers():Observable<any>{
    return this.http.get(`${this.baseUrl}users/all`)
  }

  showSingleUser(id : any ):Observable<any>{
    return this.http.get(`${this.baseUrl}users/all/${id}`)
  }

  deleteSingleUser(id : any ):Observable<any>{
    return this.http.delete(`${this.baseUrl}users/delete/${id}`)
  }

  deleteAllUser():Observable<any>{
    return this.http.delete(`${this.baseUrl}users/delete`)
  }

  showAllOrders():Observable<any>{
    return this.http.get(`${this.baseUrl}orders/all`)
  }

  showSingleOrder(id : any ):Observable<any>{
    return this.http.get(`${this.baseUrl}orders/all/${id}`)
  }
  showSingleProduct(id : any ):Observable<any>{
    return this.http.get(`${this.baseUrl}products/all/${id}`)
  }

  deleteAllOrders():Observable<any>{
    return this.http.delete(`${this.baseUrl}orders/delete`)
  }


  showAllProducts():Observable<any>{
    return this.http.get(`${this.baseUrl}products/all`)
  }
  deleteAllProducts():Observable<any>{
    return this.http.delete(`${this.baseUrl}products/delete`)
  }
  deleteSingleProduct(id : any ):Observable<any>{
    return this.http.delete(`${this.baseUrl}products/delete/${id}`)
  }
  updateProduct(id : any , body :any):Observable<any>{
    return this.http.patch(`${this.baseUrl}products/edit/${id}` , body )
  }

  showFamilyCategory():Observable<any>{
    return this.http.get(`${this.baseUrl}products/showFamily`)
  }
  showEconomicCategory():Observable<any>{
    return this.http.get(`${this.baseUrl}products/showEconomic`)
  }
  showCookCategory():Observable<any>{
    return this.http.get(`${this.baseUrl}products/showCook`)
  }

}
