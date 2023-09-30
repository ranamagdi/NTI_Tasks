import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent {
  products:any
  constructor(private auth:AuthService){}
  ngOnInit(){
    this.auth.showFamilyCategory().subscribe(res=>{

      console.log(res)
      this.products=res.data
    })
  }

}
