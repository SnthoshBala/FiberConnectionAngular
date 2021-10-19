import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/Models/Employee';
import { EmployeeService } from 'src/Services/employee.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {

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
  constructor(private obj:EmployeeService) { }

  ngOnInit(): void {
    this.id=Number(localStorage.getItem("empid"));
    this.obj.EmployeeProfile(this.id).subscribe(data=>
      {
        this.emp=data;
      })
  }
}
