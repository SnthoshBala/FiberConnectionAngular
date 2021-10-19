import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/Models/Customer';
import { CustomerService } from 'src/Services/customer.service';

@Component({
  selector: 'app-usereditprofile',
  templateUrl: './usereditprofile.component.html',
  styleUrls: ['./usereditprofile.component.css']
})
export class UsereditprofileComponent implements OnInit {

  user:Customer={
    customerId:0,
    customerAadharNo:0,
    customerAddress:"",
    customerMailId:"",
    customerName:"",
    customerPassword:"",
    customerPhoneNumber:"",
    dateOfBirth:""
  };
  id:number=0;

  constructor(private obj:CustomerService) { }
  ngOnInit(): void {
    this.id=Number(localStorage.getItem("cust_id"));
    this.obj.getProfile(this.id).subscribe(data=>
      {
        this.user=data
        console.log(this.user);
      })
  }
  editprofile(id:number,cust:Customer):void
  {
    this.obj.editProfile(id,cust).subscribe(
      data=>
      {
        alert("Profile Edited Successfully")
      }
    )
  }
}
