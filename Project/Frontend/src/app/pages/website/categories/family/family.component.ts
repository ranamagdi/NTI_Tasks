import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AddOrder } from 'src/app/interfaces/add-order';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent {
  products:any
  constructor(private auth:AuthService,private toastr: ToastrService){}
  ngOnInit(){
    this.auth.showFamilyCategory().subscribe(res=>{

      console.log(res)
      this.products=res.data
    })
  }
  model:AddOrder={
    // totalAmount:null,
    // orderDate:new Date,
    // barCode:'',
    // status:'',

        img:'',
        productName:'',
        description:'',
        category:'',
        price:null,
        dOfArrive:new Date

  }
  handleSubimt(form:NgForm){
    console.log(form)
    if(form.valid){
       this.auth.register(this.model).subscribe(res=>{
         console.log(res)
         if(res.apiStatus) {
            localStorage.setItem("products" , res.data.products)

          //  this.auth.isLogin=true
          // this.toastr.success('Added success');


         }
       })

    }
}
}
