import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products:any
  constructor(private auth:AuthService){}
  ngOnInit(){
    this.auth.showAllProducts().subscribe(res=>{

      console.log(res)
      this.products=res.data
    })
  }
  handelDelete(productId:any){
    this.auth.deleteSingleProduct(productId).subscribe(res=>{
      // this.userId=res.data._id

      console.log(this.products._id)
         console.log(res)
    })
  }
  handelDeleteAll(){
    this.auth.deleteAllProducts().subscribe(res=>{
      // this.userId=res.data._id
      // console.log(this.users._id)
         console.log(res)
    })
  }
}
