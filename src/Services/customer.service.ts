import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/Models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  req:string="https://customerapiteam3.azurewebsites.net/api/Customer";
  constructor(private http:HttpClient) { }
  registerCustomer(cust:Customer):Observable<any>
  {
    return this.http.post<any>(this.req,cust,{
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
    });
  }
  tokenCustomer(cust:Customer):Observable<any>
  {
    return this.http.post("https://authorizationapiteam3.azurewebsites.net/api/Authorization/CustomerLogin",cust,
    {
      headers: new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*',    
        'Accept': 'text/html, application/xhtml+xml, */*'
  }),responseType:'text'}
    )
  }
  getLoginDetails(cust:Customer):Observable<Customer>
  {
    return this.http.post<Customer>(this.req+"/Login",cust,
    {
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
    });
  }
  getProfile(id:number):Observable<Customer>
  {
    return this.http.get<Customer>(this.req +"/"+id,{
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
    });
  }
  editProfile(id:number,cust:Customer):Observable<any>
  {
    return this.http.put(this.req+"?id="+id,cust,{
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
    })
  }
  listOfCustomer():Observable<Customer[]>
  {
    return this.http.get<Customer[]>(this.req,{
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
    })
  }
}
