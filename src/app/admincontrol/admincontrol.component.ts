import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-admincontrol',
  templateUrl: './admincontrol.component.html',
  styleUrls: ['./admincontrol.component.css']
})
export class AdmincontrolComponent implements OnInit {

  constructor(private jwtHelper:JwtHelperService) { }

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
}
