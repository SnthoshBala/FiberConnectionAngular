import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/Models/Employee';
import { EmployeeService } from 'src/Services/employee.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor(private obj:EmployeeService,private route:Router) { }

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
  ngOnInit(): void {
  }
  addemployee(emp:Employee):void
  {
    this.obj.AddEmployee(emp).subscribe(data=>
      {
        this.route.navigate(["/admin/admincontrol"]);
        alert("New Employee Added");
      })
  }
}
