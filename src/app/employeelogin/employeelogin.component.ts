import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Employee } from 'src/Models/Employee';
import { EmployeeService } from 'src/Services/employee.service';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent implements OnInit {

  emp:Employee={
    employeeId:0,
    employeeMail:"",
    employeePassword:"",
    name:"",
    age:0,
    address:"",
    phoneNumber:"",
    workLocation:""
  }
  invalidlogin:boolean=false;
  constructor(private obj:EmployeeService,private jwtHelper:JwtHelperService,private router:Router) { }

  ngOnInit(): void {
  }
  Login(emp:Employee):void
  {
    this.obj.tokenEmployee(emp).subscribe(data=>
      {
        const emptoken=data;
        console.log(emptoken);
        localStorage.setItem("jwtemployee",emptoken);
      }, err => {
        this.invalidlogin = true;
      })
      this.obj.EmployeeLoginDetails(emp).subscribe(data=>
        {
          const empname=data.name;
          const empid=data.employeeId;
          const empphone=data.phoneNumber;
          localStorage.setItem("empname",empname);
          localStorage.setItem("empid",empid.toString());
          localStorage.setItem("empphone",empphone)
          this.router.navigate(["/employee/status"]);
        }, err => {
          this.invalidlogin = true;
        })
  }
}