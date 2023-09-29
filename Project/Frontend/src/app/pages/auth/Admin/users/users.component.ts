import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users:any

  constructor(private auth:AuthService){}
  ngOnInit(){
    this.auth.showAllUsers().subscribe(res=>{

      console.log(res)
      this.users=res.data
    })
  }
handelDelete(userId:any){
  this.auth.deleteSingleUser(userId).subscribe(res=>{
    // this.userId=res.data._id

    console.log(this.users._id)
       console.log(res)
  })
}

handelDeleteAll(){
  this.auth.deleteAllUser().subscribe(res=>{
    // this.userId=res.data._id
    // console.log(this.users._id)
       console.log(res)
  })
}
}

