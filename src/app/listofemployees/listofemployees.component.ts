import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/Models/Employee';
import { EmployeeService } from 'src/Services/employee.service';

@Component({
  selector: 'app-listofemployees',
  templateUrl: './listofemployees.component.html',
  styleUrls: ['./listofemployees.component.css']
})
export class ListofemployeesComponent implements OnInit {

  emp:Employee[]=[];
  constructor(private obj:EmployeeService) { }

  ngOnInit(): void {
    this.obj.listOfEmployee().subscribe(data=>
      {
        this.emp=data;
      })
  }

}
