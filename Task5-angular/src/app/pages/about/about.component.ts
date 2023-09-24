import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
//  inputType="password"
//  content="show"

//   handler(){
//     if(this.inputType=="password" &&this.content=="show"){
//         this.inputType="txt"
//         this.content="hidden"
//     }
//     else{
//       this.inputType="password"
//       this.content="show"
//     }

//   }

inputType="password"
inputValue:any=""
userNameInputValue=""

handleInputType(){
  this.inputType='text'
}

handleInput(event:any){
  console.log(event)
  this.inputValue=event.value
}

}
