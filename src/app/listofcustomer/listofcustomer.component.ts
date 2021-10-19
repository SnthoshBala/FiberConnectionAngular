import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/Models/Customer';
import { CustomerService } from 'src/Services/customer.service';

@Component({
  selector: 'app-listofcustomer',
  templateUrl: './listofcustomer.component.html',
  styleUrls: ['./listofcustomer.component.css']
})
export class ListofcustomerComponent implements OnInit {

  customer:Customer[]=[];
  constructor(private obj:CustomerService) { }

  ngOnInit(): void {
    this.obj.listOfCustomer().subscribe(
      data=>
      {
        this.customer=data;
      }
    )
  }

}
