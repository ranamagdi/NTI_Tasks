import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-economic',
  templateUrl: './economic.component.html',
  styleUrls: ['./economic.component.css']
})
export class EconomicComponent {
  products:any
  constructor(private auth:AuthService){}
  ngOnInit(){
    this.auth.showEconomicCategory().subscribe(res=>{

      console.log(res)
      this.products=res.data
    })
  }

}
