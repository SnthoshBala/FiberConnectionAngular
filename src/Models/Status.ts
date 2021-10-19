export interface Status{
    statusId:number;
    status1:string;
    employeeId:number|null,
    employeePhonenumber:string|null,
    employeeName:string|null,
    customerId:number;
    customerName:string;
    customerAddress:string;
    customerPhonenumber:string;
    planId:number;
    planName:string;
    planPrice:string;
    billingNumber:number;
}