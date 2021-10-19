import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offer } from 'src/Models/Offer';
import { OfferService } from 'src/Services/offer.service';

@Component({
  selector: 'app-offerdetails',
  templateUrl: './offerdetails.component.html',
  styleUrls: ['./offerdetails.component.css']
})
export class OfferdetailsComponent implements OnInit {

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
  constructor(private obj:OfferService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=Number(this.route.snapshot.paramMap.get('id'));
    this.obj.OfferById(this.id).subscribe(data=>
      {
        this.offer=data;
      })
  }
}
