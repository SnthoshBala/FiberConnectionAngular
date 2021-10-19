import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  req="https://employeeapi3.azurewebsites.net/api/Employee"
  constructor(private http:HttpClient) { }

  tokenEmployee(emp:Employee):Observable<any>
  {
    return this.http.post("https://authorizationapiteam3.azurewebsites.net/api/Authorization/EmployeeLogin",emp,
    {
      headers: new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*',
        'Accept': 'text/html, application/xhtml+xml, */*'
  }),responseType:'text'})
  }

  EmployeeLoginDetails(emp:Employee):Observable<Employee>
  {
    return this.http.post<Employee>(this.req+"/Login",emp,{
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
    });
  }

  EmployeeProfile(id:number):Observable<Employee>
  {
    return this.http.get<Employee>(this.req+"/"+id,{
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
    });
  }

  EmployeeEditProfile(id:number,emp:Employee):Observable<any>
  {
    return this.http.put<any>(this.req+"?Empid="+id,emp,{
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
    });
  }
  listOfEmployee():Observable<Employee[]>
  {
    return this.http.get<Employee[]>(this.req,{
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
    });
  }
  AddEmployee(emp:Employee):Observable<any>
  {
    return this.http.post(this.req,emp,{
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
    });
  }
}
