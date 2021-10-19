import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from 'src/Models/Offer';
import { OfferService } from 'src/Services/offer.service';

@Component({
  selector: 'app-addoffer',
  templateUrl: './addoffer.component.html',
  styleUrls: ['./addoffer.component.css']
})
export class AddofferComponent implements OnInit {

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
  constructor(private obj:OfferService,private route:Router) { }

  ngOnInit(): void {
  }
  addoffer(offer:Offer):void
  {
    this.obj.addOffer(offer).subscribe(data=>
      {
        
        this.route.navigate(["/admin/admincontrol"]);
        alert("Offer Added Succesfully");
      })
  }
}
