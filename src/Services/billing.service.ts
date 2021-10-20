import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Billing } from 'src/Models/Billing';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  req:string="https://localhost:44313/api/Billing";
  constructor(private http:HttpClient) { }

  reqbill(bill:Billing,id:number,c_id:number):Observable<number>
  {
    return this.http.post<number>(this.req+"?id="+id+"&c_id="+c_id,bill,{
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
    }
    );
  }
  getbill(id:number):Observable<Billing>
  {
    return this.http.get<Billing>(this.req+"/"+id,{
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
    });
  }
  addbill(bill:Billing,id:number):Observable<any>
  {
    return this.http.put(this.req+"?id="+id,bill,{
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
    });
  }
}
