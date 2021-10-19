import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/Models/Employee';
import { EmployeeService } from 'src/Services/employee.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {

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
  constructor(private obj:EmployeeService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=Number(this.route.snapshot.paramMap.get('id'));
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
        this.router.navigate(["admin/employeelist"]);
        alert("Profile Edited Successfully");
      })
  }
}
