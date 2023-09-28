import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
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
