import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AddofferComponent } from './addoffer/addoffer.component';
import { AddplanComponent } from './addplan/addplan.component';
import { AdmincontrolComponent } from './admincontrol/admincontrol.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AppComponent } from './app.component';
import { DummyComponent } from './dummy/dummy.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { EmployeeEditStatusComponent } from './employee-edit-status/employee-edit-status.component';
import { EmployeeProfileEditComponent } from './employee-profile-edit/employee-profile-edit.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeallstatusComponent } from './employeeallstatus/employeeallstatus.component';
import { EmployeehomeComponent } from './employeehome/employeehome.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { ListofcustomerComponent } from './listofcustomer/listofcustomer.component';
import { ListofemployeesComponent } from './listofemployees/listofemployees.component';
import { OfferdetailsComponent } from './offerdetails/offerdetails.component';
import { OffereditComponent } from './offeredit/offeredit.component';
import { OfferlistComponent } from './offerlist/offerlist.component';
import { PlandetailsComponent } from './plandetails/plandetails.component';
import { PlaneditComponent } from './planedit/planedit.component';
import { PlanlistComponent } from './planlist/planlist.component';
import { RegistercustomerComponent } from './registercustomer/registercustomer.component';
import { StatusshowComponent } from './statusshow/statusshow.component';
import { UserbillingComponent } from './userbilling/userbilling.component';
import { UsereditprofileComponent } from './usereditprofile/usereditprofile.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserstatusComponent } from './userstatus/userstatus.component';

const routes: Routes = [
  {path:'',component:AppComponent},
  {path:'home',component:UserhomeComponent,
  children:[
    {path:'plan',component:PlandetailsComponent},
    {path:'dummy',component:DummyComponent},
    {path:'register',component:RegistercustomerComponent},
    {path:'login',component:UserloginComponent},
    {path:'offers/:id',component:OfferdetailsComponent},
    {path:'profile',component:UserprofileComponent},
    {path:'editprofile',component:UsereditprofileComponent},
    {path:'bill/:id',component:UserbillingComponent},
    {path:'status',component:UserstatusComponent},
    {path:'status/:id',component:StatusshowComponent}
  ]},
  {path:'admin',component:AdminhomeComponent,
  children:[
    {path:'dummy',component:DummyComponent},
    {path:'login',component:AdminloginComponent},
    {path:'admincontrol',component:AdmincontrolComponent},
    {path:'customerlist',component:ListofcustomerComponent},
    {path:'employeelist',component:ListofemployeesComponent},
    {path:'edit/:id',component:EditemployeeComponent},
    {path:'plan',component:PlanlistComponent},
    {path:'plan/:id',component:PlaneditComponent},
    {path:'offer',component:OfferlistComponent},
    {path:'offer/:id',component:OffereditComponent},
    {path:'addplan',component:AddplanComponent},
    {path:'addoffer',component:AddofferComponent},
    {path:'addemployee',component:AddemployeeComponent}
  ]},
  {path:'employee',component:EmployeehomeComponent,
  children:[
    {path:'dummy',component:DummyComponent},
    {path:'login',component:EmployeeloginComponent},
    {path:'status',component:EmployeeallstatusComponent},
    {path:'status/:id',component:EmployeeEditStatusComponent},
    {path:'profile',component:EmployeeProfileComponent},
    {path:'profileEdit',component:EmployeeProfileEditComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
