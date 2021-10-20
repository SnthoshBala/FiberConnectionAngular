import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FiberPlan } from 'src/Models/FiberPlan';

@Injectable({
  providedIn: 'root'
})
export class FiberplanService {

  req:string="https://localhost:44393/api/Fiber";
  constructor(private http:HttpClient) { }
  getFiberPlan():Observable<FiberPlan[]>
  {
    return this.http.get<FiberPlan[]>(this.req,{
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
      })
  }
  getPlanById(id:number):Observable<FiberPlan>
  {
    return this.http.get<FiberPlan>(this.req+"/"+id,{
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
      });
  }
  editPlan(id:number,fp:FiberPlan):Observable<any>
  {
    return this.http.put<any>(this.req+"?id="+id,fp,{
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
      })
  }
  deleteplan(id:number):Observable<any>
  {
    return this.http.delete(this.req+"?id="+id,{
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
      });
  }
  addplan(plan:FiberPlan):Observable<any>
  {
    return this.http.post(this.req,plan,{
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
      });
  }
}
