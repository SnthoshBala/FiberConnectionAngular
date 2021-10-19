import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  flag:boolean=false;
  username:string|null="";
  constructor(private route:Router,private jwtHelper:JwtHelperService) { }

  ngOnInit(): void {
  }

  IsAuthendicated():boolean{
    const tokenuser:string|null=localStorage.getItem("jwtuser");
    if(tokenuser && !this.jwtHelper.isTokenExpired(tokenuser) && tokenuser!=null)
    {
      this.username=localStorage.getItem("custname");
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
    this.route.navigate(["/home/plan"]);
  }
}
