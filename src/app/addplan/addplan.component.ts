import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FiberPlan } from 'src/Models/FiberPlan';
import { FiberplanService } from 'src/Services/fiberplan.service';

@Component({
  selector: 'app-addplan',
  templateUrl: './addplan.component.html',
  styleUrls: ['./addplan.component.css']
})
export class AddplanComponent implements OnInit {

  plan:FiberPlan={
    planId:0,
    planName:"",
    planPrice:"",
    planSpeed:"",
    validity:"",
    offerId:"",
    image:""
  }
  constructor(private obj:FiberplanService,private route:Router) { }

  ngOnInit(): void {
  }
  addplan(plan:FiberPlan):void
  {
    this.obj.addplan(plan).subscribe(data=>{
      alert("Plan added Successfully");
      this.route.navigate(["/admin/admincontrol"]);
    })
  }
}
