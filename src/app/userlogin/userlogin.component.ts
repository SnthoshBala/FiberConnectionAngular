import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/Services/customer.service';
import { Customer } from 'src/Models/Customer';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  cust:Customer=
  {
    customerName:"",
    customerAddress:"",
    customerMailId:"",
    customerPassword:"",
    customerPhoneNumber:"",
    customerAadharNo:0,
    customerId:0,
    dateOfBirth:""
  };
  invalidlogin:boolean=false;
  constructor(private obj:CustomerService,private router:Router) { }

  ngOnInit(): void {
  }
  login(c:Customer):void
  {
    this.obj.tokenCustomer(c).subscribe(
      data=>{
        const usertoken=data;
        localStorage.setItem("jwtuser",usertoken);
      }, err => {
        this.invalidlogin = true;
      }
    )
    
    this.obj.getLoginDetails(c).subscribe(
      data=>{
        const cust_id=data.customerId;
        const cust_name=data.customerName;
        localStorage.setItem("custname",cust_name);
        localStorage.setItem("cust_id",cust_id.toString());
        this.router.navigate(['/home/plan']);
      }, err => {
        this.invalidlogin = true;
      }
    )
  }

}
