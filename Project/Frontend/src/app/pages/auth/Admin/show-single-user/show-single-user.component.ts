import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-show-single-user',
  templateUrl: './show-single-user.component.html',
  styleUrls: ['./show-single-user.component.css']
})
export class ShowSingleUserComponent {
  users:any

  constructor(private auth:AuthService){}
  // ngOnInit(){
  //   this.auth.showSingleUser(id).subscribe(res=>{
  //     // this.userId = res.data._id
  //     console.log(res.users._id)
  //     this.users=res.data
  //   })
  // }

}
