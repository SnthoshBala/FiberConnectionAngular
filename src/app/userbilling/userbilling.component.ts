import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Billing } from 'src/Models/Billing';
import { BillingService } from 'src/Services/billing.service';
@Component({
  selector: 'app-userbilling',
  templateUrl: './userbilling.component.html',
  styleUrls: ['./userbilling.component.css']
})
export class UserbillingComponent implements OnInit {

  bill:Billing={
    billingNumber:0,
    customerId:0,
    planId:0,
    bookedDate:null,
    customerName:"",
    dateOfBirth:null,
    customerAddress:"",
    customerPhoneNumber:"",
    customerAadharNo:"",
    customerMailId:"",
    planName:"",
    planPrice:"",
    tax:0,
    total:0,
    paymentMethod:""
  };
  id:number=0;
  constructor(private obj:BillingService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=Number(this.route.snapshot.paramMap.get('id'));
    this.obj.getbill(this.id).subscribe(
      data=>
      {
        this.bill=data;
        this.bill.dateOfBirth = new Date().toISOString().split('T')[0];
        this.bill.bookedDate= new Date().toISOString().split('T')[0];
        console.log(this.bill);
      }
    )
  }
  paybill(bill:Billing,id:number):void
  {
    {debugger}
    this.obj.addbill(bill,id).subscribe(data=>
      {
        this.router.navigate(["/home/plan"]);
        alert("Your Connection was Booked Successfully");
      })
  }

}
