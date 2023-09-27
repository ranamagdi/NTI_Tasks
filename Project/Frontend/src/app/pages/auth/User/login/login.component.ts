import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from 'src/app/interfaces/login';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private auth:LoginService){}
  model:Login={
    email:'',
    password:''
  }

  handleSubimt(form:NgForm){
       console.log(form)
       if(form.valid){
          this.auth.login(this.model).subscribe(res=>{
            console.log(res)
          })

       }
  }

}
