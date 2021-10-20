import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/Models/Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  req:string="https://localhost:44378/api/Authorization/AdminLogin";
  constructor(private http:HttpClient) { }
  getadmintoken(admin:Admin):Observable<any>
  {
    return this.http.post(this.req,admin,
      {
        headers: new HttpHeaders({
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*',
          'Accept': 'text/html, application/xhtml+xml, */*'
    }),responseType:'text'
  });
  }
}