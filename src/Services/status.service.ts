import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StatusshowComponent } from 'src/app/statusshow/statusshow.component';
import { Status } from 'src/Models/Status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  req:string="https://localhost:44396/api/Status";
  constructor(private http:HttpClient) { }

  userStatus(id:number):Observable<Status[]>
  {
    return this.http.get<Status[]>(this.req+"/AllStatus/"+id,{
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
    });
  }
  showStatus(id:number):Observable<Status>
  {
    return this.http.get<Status>(this.req+"/StatusById/"+id,{
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
    });
  }
  deleteStatus(id:number):Observable<any>
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
  getAllstatus():Observable<Status[]>
  {
    return this.http.get<Status[]>(this.req+"/AllStatus",{
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
    });
  }
  editStatus(id:number,status:Status):Observable<any>
  {
    return this.http.put(this.req+"?id="+id,status,{
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
    });
  }
}
