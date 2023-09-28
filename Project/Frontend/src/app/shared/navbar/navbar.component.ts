import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public auth:AuthService){
    if(localStorage.getItem('token'))this.auth.isLogin=true
    console.log(auth.isLogin)
  }
  handleLogOut(){
    this.auth.logout(localStorage.getItem('token')).subscribe(res=>{
      console.log(res)})
    this.auth.isLogin=false
    localStorage.removeItem('token')
  }

}
