import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { EmployeehomeComponent } from './employeehome/employeehome.component';
import { RouterModule } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';
import { PlandetailsComponent } from './plandetails/plandetails.component';
import { RegistercustomerComponent } from './registercustomer/registercustomer.component';
import { JwtModule } from "@auth0/angular-jwt";
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmincontrolComponent } from './admincontrol/admincontrol.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { OfferdetailsComponent } from './offerdetails/offerdetails.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserbillingComponent } from './userbilling/userbilling.component';
import { UserstatusComponent } from './userstatus/userstatus.component';
import { UsereditprofileComponent } from './usereditprofile/usereditprofile.component';
import { StatusshowComponent } from './statusshow/statusshow.component';
import { EmployeeallstatusComponent } from './employeeallstatus/employeeallstatus.component';
import { EmployeeEditStatusComponent } from './employee-edit-status/employee-edit-status.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeProfileEditComponent } from './employee-profile-edit/employee-profile-edit.component';
import { ListofcustomerComponent } from './listofcustomer/listofcustomer.component';
import { ListofemployeesComponent } from './listofemployees/listofemployees.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { PlanlistComponent } from './planlist/planlist.component';
import { PlaneditComponent } from './planedit/planedit.component';
import { OfferlistComponent } from './offerlist/offerlist.component';
import { OffereditComponent } from './offeredit/offeredit.component';
import { AddplanComponent } from './addplan/addplan.component';
import { AddofferComponent } from './addoffer/addoffer.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
export function tokenUserGet() {
  return localStorage.getItem("jwtuser");
}
export function tokenAdminGet() {
  return localStorage.getItem("jwtadmin");
}
export function tokenEmployeeGet() {
  return localStorage.getItem("jwtemployee");
}
@NgModule({
  declarations: [
    AppComponent,
    AdminhomeComponent,
    UserhomeComponent,
    EmployeehomeComponent,
    DummyComponent,
    PlandetailsComponent,
    RegistercustomerComponent,
    UserloginComponent,
    AdminloginComponent,
    AdmincontrolComponent,
    EmployeeloginComponent,
    OfferdetailsComponent,
    UserprofileComponent,
    UserbillingComponent,
    UserstatusComponent,
    UsereditprofileComponent,
    StatusshowComponent,
    EmployeeallstatusComponent,
    EmployeeEditStatusComponent,
    EmployeeProfileComponent,
    EmployeeProfileEditComponent,
    ListofcustomerComponent,
    ListofemployeesComponent,
    EditemployeeComponent,
    PlanlistComponent,
    PlaneditComponent,
    OfferlistComponent,
    OffereditComponent,
    AddplanComponent,
    AddofferComponent,
    AddemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,JwtModule.forRoot({
      config: {
        tokenGetter: tokenUserGet,
        allowedDomains: ["*"],
        disallowedRoutes: []
      }
    }),JwtModule.forRoot({
      config: {
        tokenGetter: tokenAdminGet,
        allowedDomains: ["*"],
        disallowedRoutes: []
      }
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenEmployeeGet,
        allowedDomains: ["*"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
