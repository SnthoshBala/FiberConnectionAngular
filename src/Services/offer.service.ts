import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offer } from 'src/Models/Offer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  req:string="https://offersapiteam3.azurewebsites.net/api/Offer";
  constructor(private http:HttpClient) { }
  OfferById(id:number):Observable<Offer>
  {
    return this.http.get<Offer>(this.req +"/"+id,{
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
    })
  }
  getAllOffers():Observable<Offer[]>
  {
    return this.http.get<Offer[]>(this.req,{
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
    });
  }
  editOffer(id:number,offer:Offer):Observable<any>
  {
    return this.http.put(this.req+"?id="+id,offer,{
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
    })
  }
  deleteOffer(id:number,offer:Offer):Observable<any>
  {
    return this.http.delete<any>(this.req+"?id="+id,{
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
    });
  }
  addOffer(offer:Offer):Observable<any>
  {
    return this.http.post(this.req,offer,{
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
    });
  }
}
