import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-show-single-product',
  templateUrl: './show-single-product.component.html',
  styleUrls: ['./show-single-product.component.css']
})
export class ShowSingleProductComponent {
  products:any
  constructor(private auth:AuthService ,private activated : ActivatedRoute){}
  ngOnInit(){
    this.activated.paramMap.subscribe(params=>{
      let Id = params.get('id')
      console.log(params.get('id'))
      this.getSingleProductData(Id)
    })
    // this.auth.showAllUsers().subscribe(res=>{
    //   this.users = res
    // })
  }
  getSingleProductData(Id : any){
    this.auth.showSingleProduct(Id).subscribe(res=>{
      console.log(res)
      this.products= res.data
    })
  }


}
