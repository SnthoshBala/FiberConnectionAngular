import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/Services/customer.service';
import { Customer } from 'src/Models/Customer';

@Component({
  selector: 'app-registercustomer',
  templateUrl: './registercustomer.component.html',
  styleUrls: ['./registercustomer.component.css']
})
export class RegistercustomerComponent implements OnInit {

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
  }
  constructor(private obj:CustomerService,private route:Router) { }

  ngOnInit(): void {
  }

  postcustomer_api(cust:Customer):void{
    {debugger}
    this.obj.registerCustomer(cust).subscribe(data=>
      {
        alert("Registered Successfully!!!");
        this.route.navigate(['/home/login']);
      })
  }

}
