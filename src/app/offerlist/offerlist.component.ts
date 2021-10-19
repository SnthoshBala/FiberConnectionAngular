import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from 'src/Models/Offer';
import { OfferService } from 'src/Services/offer.service';

@Component({
  selector: 'app-offerlist',
  templateUrl: './offerlist.component.html',
  styleUrls: ['./offerlist.component.css']
})
export class OfferlistComponent implements OnInit {

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
  offers:Offer[]=[];
  constructor(private obj:OfferService,private route:Router) { }

  ngOnInit(): void {
    this.obj.getAllOffers().subscribe(data=>
      {
        this.offers=data;
      });
  }
  deleteOffer(id:number):void
  {
    {debugger}
    this.obj.deleteOffer(id,this.offer).subscribe(data=>
      {
        this.route.navigate(["/admin/offer"]);
        alert("Deleted Offer Successfully");
      })
  }

}
