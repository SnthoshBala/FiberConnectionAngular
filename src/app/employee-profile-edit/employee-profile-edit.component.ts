import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/Models/Employee';
import { EmployeeService } from 'src/Services/employee.service';

@Component({
  selector: 'app-employee-profile-edit',
  templateUrl: './employee-profile-edit.component.html',
  styleUrls: ['./employee-profile-edit.component.css']
})
export class EmployeeProfileEditComponent implements OnInit {

  emp:Employee={
    employeeId:0,
    employeeMail:"",
    employeePassword:"",
    name:"",
    age:0,
    address:"",
    phoneNumber:"",
    workLocation:""
  };
  id:number=0;
  constructor(private obj:EmployeeService,private route:Router) { }

  ngOnInit(): void {
    this.id=Number(localStorage.getItem("empid"));
    this.obj.EmployeeProfile(this.id).subscribe(data=>
      {
        this.emp=data;
        console.log(this.emp);
      })
  }
  editProfile(id:number,emp:Employee):void
  {
    this.obj.EmployeeEditProfile(id,emp).subscribe(data=>
      {
        this.route.navigate(["employee/status"]);
        alert("Profile Edited Successfully");
      })
  }
}
