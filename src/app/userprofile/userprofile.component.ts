import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/Models/Customer';
import { CustomerService } from 'src/Services/customer.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  id:number=0;
  user:Customer={
    customerId:0,
    customerAadharNo:0,
    customerAddress:"",
    customerMailId:"",
    customerName:"",
    customerPassword:"",
    customerPhoneNumber:"",
    dateOfBirth:""
  }
  constructor(private obj:CustomerService) { }

  ngOnInit(): void {
    this.id=Number(localStorage.getItem("cust_id"));
    this.obj.getProfile(this.id).subscribe(data=>
      {
        this.user=data
        console.log(this.user);
      })
  }

}
