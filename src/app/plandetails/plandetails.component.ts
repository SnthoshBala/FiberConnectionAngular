import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FiberplanService } from 'src/Services/fiberplan.service';
import { FiberPlan } from 'src/Models/FiberPlan';
import { Billing } from 'src/Models/Billing';
import { BillingService } from 'src/Services/billing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plandetails',
  templateUrl: './plandetails.component.html',
  styleUrls: ['./plandetails.component.css']
})
export class PlandetailsComponent implements OnInit {

  plan:FiberPlan[]=[];
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
  c_id:number=0;
  g_id:number=0;
  constructor(private obj:FiberplanService,private jwtHelper:JwtHelperService,private billobj:BillingService,private route:Router) { }

  ngOnInit(): void {
    this.obj.getFiberPlan().subscribe(data=>
      {
        this.plan=data;
        console.log(this.plan);
      })   
  }

  IsAuthendicated():boolean{
    const tokenuser:string|null=localStorage.getItem("jwtuser");
    if(tokenuser && !this.jwtHelper.isTokenExpired(tokenuser) && tokenuser!=null)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  requestbill(id:number):void
  {
    this.c_id=Number(localStorage.getItem("cust_id"));
    this.billobj.reqbill(this.bill,id,this.c_id).subscribe(data=>
      {
        this.g_id=data;
        console.log(this.g_id);
        this.route.navigate(["/home/bill/"+this.g_id]);
      }
    );
  }
}
