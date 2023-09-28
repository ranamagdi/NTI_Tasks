export interface Register {
  email : string,
  password:string ,
  fName:string,
  lName:string,
  countryCode:string,
    phone:Number|null,
    gender:string,
    dOfBirth:Date,
  addresses :{
    addrType:string,
    addrDetails:string
     }
}
