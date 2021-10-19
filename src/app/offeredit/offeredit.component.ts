import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from 'src/Models/Offer';
import { OfferService } from 'src/Services/offer.service';

@Component({
  selector: 'app-offeredit',
  templateUrl: './offeredit.component.html',
  styleUrls: ['./offeredit.component.css']
})
export class OffereditComponent implements OnInit {

  offer:Offer={
    offerId:0,
    voot:"",
    hungamaplay:"",
    lionplay:"",
    netflix:"",
    hotstar:"",
    others:"",
    ultra:""
  };
  id:number=0;
  constructor(private obj:OfferService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=Number(this.route.snapshot.paramMap.get('id'));
    this.obj.OfferById(this.id).subscribe(data=>
      {
        this.offer=data;
        console.log(this.offer);
      })
  }
  editOffer(id:number,offer:Offer):void
  {
    this.obj.editOffer(id,offer).subscribe(data=>
      {
        
        this.router.navigate(["/admin/offer"]);
        alert("Offer edited Successfully");
      })
  }
}
