export interface Billing{

    billingNumber:number;
    customerId:number;
    planId:number;
    bookedDate:null|string;
    customerName:string;
    dateOfBirth:null|string;
    customerAddress:string;
    customerPhoneNumber:string;
    customerAadharNo:string;
    customerMailId:string;
    planName:string;
    planPrice:string;
    tax:number;
    total:number;
    paymentMethod:string;
}