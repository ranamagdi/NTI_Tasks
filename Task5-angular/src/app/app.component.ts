import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName:string="Rana"
  lastName:string="Magdi"
  address="Naser-city"
  inputType="text"
  inputId:string="userName"
  placeholder="enter username"
  patagraphText="Lorem..."
  name:any
  disabled:boolean=true
  classText="text-danger"
  getFullName(){
    return `${this.firstName}-${this.lastName} `
  }
}
