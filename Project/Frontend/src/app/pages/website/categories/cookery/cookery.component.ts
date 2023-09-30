import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-cookery',
  templateUrl: './cookery.component.html',
  styleUrls: ['./cookery.component.css']
})
export class CookeryComponent {
  products:any
  constructor(private auth:AuthService){}
  ngOnInit(){
    this.auth.showCookCategory().subscribe(res=>{

      console.log(res)
      this.products=res.data
    })
  }

}
