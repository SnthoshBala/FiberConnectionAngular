import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Status } from 'src/Models/Status';
import { StatusService } from 'src/Services/status.service';

@Component({
  selector: 'app-employee-edit-status',
  templateUrl: './employee-edit-status.component.html',
  styleUrls: ['./employee-edit-status.component.css']
})
export class EmployeeEditStatusComponent implements OnInit {
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
  };
  
id:number=0;
  constructor(private obj:StatusService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=Number(this.route.snapshot.paramMap.get('id'));
    this.obj.showStatus(this.id).subscribe(data=>
      {
        this.stat=data;
        this.stat.employeeName=localStorage.getItem("empname");
        this.stat.employeePhonenumber=localStorage.getItem("empphone");
        this.stat.employeeId=Number(localStorage.getItem("empid"));
        this.stat.status1="On Process";
        console.log(this.stat);
      });
  }
  editStatus(id:number,stat:Status):void
  {
    this.obj.editStatus(id,stat).subscribe(data=>
      {
        alert("Got your Job Reach the Customer!!");
        this.router.navigate(["/employee/status"]);
      })
  }

}
