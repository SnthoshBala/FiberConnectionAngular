import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Status } from 'src/Models/Status';
import { StatusService } from 'src/Services/status.service';

@Component({
  selector: 'app-statusshow',
  templateUrl: './statusshow.component.html',
  styleUrls: ['./statusshow.component.css']
})
export class StatusshowComponent implements OnInit {

  stat:Status=
  {
    planId:0,
    statusId:0,
    customerId:0,
    employeeId:0,
    employeeName:"",
    employeePhonenumber:"",
    customerName:"",
    customerAddress:"",
    customerPhonenumber:"",
    planName:"",
    planPrice:"",
    status1:"",
    billingNumber:0
  }
id:number=0;
  constructor(private obj:StatusService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=Number(this.route.snapshot.paramMap.get('id'));
    this.obj.showStatus(this.id).subscribe(data=>
      {
        this.stat=data;
      });
  }

}
