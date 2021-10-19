import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FiberPlan } from 'src/Models/FiberPlan';
import { FiberplanService } from 'src/Services/fiberplan.service';

@Component({
  selector: 'app-planlist',
  templateUrl: './planlist.component.html',
  styleUrls: ['./planlist.component.css']
})
export class PlanlistComponent implements OnInit {

  plandetails:FiberPlan[]=[];
  constructor(private obj:FiberplanService,private route:Router) { }

  ngOnInit(): void {
    this.obj.getFiberPlan().subscribe(data=>
      {
        this.plandetails=data;
      });
  }
  plandelete(id:number)
  {
    this.obj.deleteplan(id).subscribe(data=>
      {
        this.route.navigate(["/admin/admincontrol"]);
        alert("Plan deleted Successful")
      })
  } 
}
