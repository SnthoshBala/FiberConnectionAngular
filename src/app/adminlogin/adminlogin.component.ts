import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/Models/Admin';
import { AdminService } from 'src/Services/admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  admin:Admin={
    adminId:0,
    adminUsername:"",
    adminPassword:""
  }
  invalidlogin:boolean=false;
  constructor(private obj:AdminService,private router:Router) { }

  ngOnInit(): void {
  }

  login(admin:Admin):void{
    this.obj.getadmintoken(admin).subscribe(
      data=>
      {
        const admintoken=data;
        console.log(admintoken);
        localStorage.setItem("jwtadmin",admintoken);
        this.router.navigate(["/admin/admincontrol"]);
      }, err => {
        this.invalidlogin = true;
      }
    );
  }
}