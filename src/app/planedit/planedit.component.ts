import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FiberPlan } from 'src/Models/FiberPlan';
import { FiberplanService } from 'src/Services/fiberplan.service';

@Component({
  selector: 'app-planedit',
  templateUrl: './planedit.component.html',
  styleUrls: ['./planedit.component.css']
})
export class PlaneditComponent implements OnInit {

  plan:FiberPlan={
    planId:0,
    planName:"",
    planPrice:"",
    planSpeed:"",
    validity:"",
    offerId:"",
    image:""
  }
  id:number=0;
  constructor(private obj:FiberplanService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=Number(this.route.snapshot.paramMap.get('id'));
    this.obj.getPlanById(this.id).subscribe(data=>
      {
        this.plan=data;
      });
  }
  editplan(plan:FiberPlan,id:number):void
  {
    {debugger}
    this.obj.editPlan(id,plan).subscribe(data=>
      {
        alert("Updated Plan Details");
        this.router.navigate(['/admin/plan']);
      })
  }

}
