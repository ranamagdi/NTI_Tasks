import { Component } from '@angular/core';
import { AddProduct } from 'src/app/interfaces/add-product';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  Category=["family", "cook","economic"]
  image : any = null
  model:AddProduct={
    productName:'',
    description:'',
    price:'',
    category:'',
    dOfArrive:'',
    image:''

  }
  constructor(private auth:AuthService,private router : Router,private toastr: ToastrService){}
  handleImg(eve :any){
    console.log(eve)
    this.model.image = eve.target.files[0]
  }
  // handleSubimt(form:NgForm){
  //   console.log(form)
  //   if(form.valid){
  //     let formData = new FormData()
  //     formData.append('image' , this.model.image )
  //     formData.append('productName' , this.model.productName )
  //     formData.append('description' , this.model.description )
  //     formData.append('dOfArrive' , this.model.dOfArrive)
  //     formData.append('category' , this.model.category)
  //     formData.append('price' , this.model.price)
  //     // this.auth.Uploadimage(formData).subscribe(res=>{
  //     //   console.log(res)
  //       this.auth.addProduct(formData).subscribe(res=>{
  //         console.log(res)
  //         if(res.apiStatus) {
  //           this.toastr.success('Products added success');
  //           this.router.navigateByUrl('/productsshow')
  //         }
  //       })
  //     // })

  //   }
  // }
}








