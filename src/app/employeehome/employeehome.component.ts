import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-employeehome',
  templateUrl: './employeehome.component.html',
  styleUrls: ['./employeehome.component.css']
})
export class EmployeehomeComponent implements OnInit {

  empname:string|null="";
  constructor(private route:Router,private jwtHelper:JwtHelperService) { }

  ngOnInit(): void {
  }

  IsAuthendicated():boolean{
    const tokenemp:string|null=localStorage.getItem("jwtemployee");
    if(tokenemp && !this.jwtHelper.isTokenExpired(tokenemp) && tokenemp!=null)
    {
      this.empname=localStorage.getItem("empname");
      return true;
    }
    else
    {
      return false;
    }
  }
  Logout()
  {
    localStorage.clear();
    this.route.navigate(["/employee/login"]);
  }
}
