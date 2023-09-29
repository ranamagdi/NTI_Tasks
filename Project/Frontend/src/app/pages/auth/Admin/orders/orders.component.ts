import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

 orders:any
  constructor(private auth:AuthService){}
  ngOnInit(){
    this.auth.showAllOrders().subscribe(res=>{

      console.log(res)
      this.orders=res.data
    })
  }


handelDeleteAll(){
  this.auth.deleteAllOrders().subscribe(res=>{
    // this.userId=res.data._id
    // console.log(this.users._id)
       console.log(res)
  })
}

}
