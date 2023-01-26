import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubmarketService {

  constructor() { }

  submarketrankings=[
    {metric:"NER",name:"Midtown/Five Points",price:"$3.144",percentage:"-0.3%"},
    {metric:"NER",name:"Buckhead",price:"$2.004",percentage:"-0.6%"},
    {metric:"NER",name:"Roswell/Alpharetta",price:"$1.865",percentage:"+0.3%"},
    {metric:"NER",name:"Decatur/Avondale",price:"$1.154",percentage:"-5%"},
    {metric:"NER",name:"Sandy Springs/Dunwoody",price:"$2.144",percentage:"+0.3%"},
    {metric:"NER/Sqft",name:"Midtown/Five Points",price:"$2.144",percentage:"+0.3%"},
    {metric:"NER/Sqft",name:"Buckhead",price:"$2.704",percentage:"-0.6%"},
    {metric:"NER/Sqft",name:"Central I-75 West",price:"$1.895",percentage:"-0.3%"},
    {metric:"NER/Sqft",name:"Decatur/Avondale",price:"$3.844",percentage:"-5%"},
    {metric:"NER/Sqft",name:"Roswell/Alpharetta",price:"$2.154",percentage:"-0.3%"},
    {metric:"Concessions",name:"Dawson County",price:"$2.144",percentage:"-0.3%"},
    {metric:"Concessions",name:"Bartow County",price:"$2.004",percentage:"-0.6%"},
    {metric:"Concessions",name:"Carroll County",price:"$1.865",percentage:"-0.3%"},
    {metric:"Concessions",name:"Decatur/Avondale",price:"$1.144",percentage:"-5%"},
    {metric:"Concessions",name:"Sandy Springs/Dunwoody",price:"$2.144",percentage:"-0.3%"},
    {metric:"Occupancy %",name:"Dawson County",price:"$1.134",percentage:"-0.3%"},
    {metric:"Occupancy %",name:"Newton County",price:"$2.884",percentage:"+0.6%"},
    {metric:"Occupancy %",name:"Forsyth County",price:"$7.865",percentage:"-0.3%"},
    {metric:"Occupancy %",name:"Decatur/Avondale",price:"$1.154",percentage:"-5%"},
    {metric:"Occupancy %",name:"Clayton",price:"$2.1485",percentage:"-0.3%"},
    {metric:"Leased %",name:"Midtown/Five Points",price:"$4.144",percentage:"-0.3%"},
    {metric:"Leased %",name:"Dawson County",price:"$2.054",percentage:"-0.6%"},
    {metric:"Leased %",name:"Newton County",price:"$2.875",percentage:"+0.3%"},
    {metric:"Leased %",name:"Decatur/Avondale",price:"$1.114",percentage:"-5%"},
    {metric:"Leased %",name:"Forsyth County",price:"$2.444",percentage:"+0.3%"},
    {metric:"Traffic/Week",name:"Dawson County",price:"$3.644",percentage:"-0.3%"},
    {metric:"Traffic/Week",name:"Newton County",price:"$1.004",percentage:"-0.6%"},
    {metric:"Traffic/Week",name:"Caroll County",price:"$1.565",percentage:"-0.3%"},
    {metric:"Traffic/Week",name:"Decatur/Avondale",price:"$2.144",percentage:"+5%"},
    {metric:"Traffic/Week",name:"Sandy Springs/Dunwoody",price:"$2.305",percentage:"-0.3%"},
    {metric:"Leases/Week",name:"Forsyth County",price:"$1.444",percentage:"+0.3%"},
    {metric:"Leases/Week",name:"Dawson County",price:"$2.804",percentage:"-0.6%"},
    {metric:"Leases/Week",name:"Newton County",price:"$2.005",percentage:"-+0.3%"},
    {metric:"Leases/Week",name:"Splading County",price:"$1.504",percentage:"-5%"},
    {metric:"Leases/Week",name:"Clayton",price:"$5.514",percentage:"-0.3%"}
  ]

}
