import { Component, OnInit } from '@angular/core';
import { Status } from 'src/Models/Status';
import { StatusService } from 'src/Services/status.service';

@Component({
  selector: 'app-employeeallstatus',
  templateUrl: './employeeallstatus.component.html',
  styleUrls: ['./employeeallstatus.component.css']
})
export class EmployeeallstatusComponent implements OnInit {

  status:Status[]=[];
  constructor(private obj:StatusService) { }

  ngOnInit(): void {
    this.obj.getAllstatus().subscribe(data=>
      {
        this.status=data;
        console.log(this.status);
      });
  }

}
