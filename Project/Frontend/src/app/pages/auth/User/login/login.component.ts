import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces/login';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private auth:AuthService,private router : Router){}
  model:Login={
    email:'',
    password:''
  }

  handleSubimt(form:NgForm){
       console.log(form)
       if(form.valid){
          this.auth.login(this.model).subscribe(res=>{
            console.log(res)
            if(res.apiStatus) {
              localStorage.setItem("token" , res.data.token)
              this.auth.isLogin=true
              this.router.navigateByUrl('/')
            }
          })

       }
  }

}
