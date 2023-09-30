import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-single-product-edit',
  templateUrl: './single-product-edit.component.html',
  styleUrls: ['./single-product-edit.component.css']
})
export class SingleProductEditComponent {
  product = new FormGroup({
    productName : new FormControl(''),
    description: new FormControl(''),
    dOfArrive : new FormControl(''),
    category:new FormControl(''),
    price : new FormControl(''),


  })
productID : any
Category=["family", "cook","economic"]
constructor(private auth:AuthService ,private activated : ActivatedRoute,private toastr: ToastrService){}
  ngOnInit(){
    this.activated.paramMap.subscribe(params=>{
      let Id = params.get('id')
      console.log(params.get('id'))
      this.getSingleProductData(Id)

    })

  }
  getSingleProductData(Id : any){
    this.auth.showSingleProduct(Id).subscribe(res=>{
      console.log(res)
      // this.product= res.data
      this.product.patchValue(res.data)
       console.log(res.data._id)
      this.productID = res.data._id
    })
  }

  handleUpdateProduct(){
    this.auth.updateProduct(this.productID , this.product.value).subscribe(res=>{
      console.log(res)
      this.toastr.success('edited success')
    })
  }
}

