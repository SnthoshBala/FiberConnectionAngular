import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Status } from 'src/Models/Status';
import { StatusService } from 'src/Services/status.service';

@Component({
  selector: 'app-userstatus',
  templateUrl: './userstatus.component.html',
  styleUrls: ['./userstatus.component.css']
})
export class UserstatusComponent implements OnInit {

  status:Status[]=[];
  id:number=0;
  constructor(private obj:StatusService,private route:Router) { }

  ngOnInit(): void {
    this.id=Number(localStorage.getItem("cust_id"));
    this.obj.userStatus(this.id).subscribe(data=>
      {
        this.status=data;
      })
  }
  cancelstatus(id:number)
  {
    this.obj.deleteStatus(id).subscribe(data=>
      {
        this.route.navigate(["/home/plan"]);
        alert("Booking Cancelled Successfully");
      })
  }

}
