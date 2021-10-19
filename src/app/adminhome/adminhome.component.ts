import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  flag:boolean=false;
  constructor(private jwtHelper:JwtHelperService,private route:Router) { }

  ngOnInit(): void {
  }

  IsAuthendicated():boolean{
    const tokenadmin:string|null=localStorage.getItem("jwtadmin");
    if(tokenadmin && !this.jwtHelper.isTokenExpired(tokenadmin) && tokenadmin!=null)
    {
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
    this.route.navigate(["/admin/login"]);
  }
}
