import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubmarketService {

  constructor() { }

  submarketrankings=[
    {metric:"NER",name:"Midtown/Five Points",price:"$2.144",percentage:"-0.3%"},
    {metric:"NER",name:"Buckhead",price:"$2.004",percentage:"-0.6%"},
    {metric:"NER",name:"Roswell/Alpharetta",price:"$1.865",percentage:"+0.3%"},
    {metric:"NER",name:"Decatur/Avondale",price:"$1.144",percentage:"-5%"},
    {metric:"NER",name:"Sandy Springs/Dunwoody",price:"$2.144",percentage:"+0.3%"},
    {metric:"NER/Sqft",name:"Midtown/Five Points",price:"$2.144",percentage:"+0.3%"},
    {metric:"NER/Sqft",name:"Buckhead",price:"$2.004",percentage:"-0.6%"},
    {metric:"NER/Sqft",name:"Central I-75 West",price:"$1.865",percentage:"-0.3%"},
    {metric:"NER/Sqft",name:"Decatur/Avondale",price:"$1.144",percentage:"-5%"},
    {metric:"NER/Sqft",name:"Roswell/Alpharetta",price:"$2.144",percentage:"-0.3%"},
    {metric:"Concessions",name:"Dawson County",price:"$2.144",percentage:"-0.3%"},
    {metric:"Concessions",name:"Bartow County",price:"$2.004",percentage:"-0.6%"},
    {metric:"Concessions",name:"Carroll County",price:"$1.865",percentage:"-0.3%"},
    {metric:"Concessions",name:"Decatur/Avondale",price:"$1.144",percentage:"-5%"},
    {metric:"Concessions",name:"Sandy Springs/Dunwoody",price:"$2.144",percentage:"-0.3%"},
    {metric:"Occupancy %",name:"Dawson County",price:"$2.144",percentage:"-0.3%"},
    {metric:"Occupancy %",name:"Newton County",price:"$2.004",percentage:"+0.6%"},
    {metric:"Occupancy %",name:"Forsyth County",price:"$1.865",percentage:"-0.3%"},
    {metric:"Occupancy %",name:"Decatur/Avondale",price:"$1.144",percentage:"-5%"},
    {metric:"Occupancy %",name:"Clayton",price:"$2.144",percentage:"-0.3%"},
    {metric:"Leased %",name:"Midtown/Five Points",price:"$2.144",percentage:"-0.3%"},
    {metric:"Leased %",name:"Dawson County",price:"$2.004",percentage:"-0.6%"},
    {metric:"Leased %",name:"Newton County",price:"$1.865",percentage:"+0.3%"},
    {metric:"Leased %",name:"Decatur/Avondale",price:"$1.144",percentage:"-5%"},
    {metric:"Leased %",name:"Forsyth County",price:"$2.144",percentage:"+0.3%"},
    {metric:"Traffic/Week",name:"Dawson County",price:"$2.144",percentage:"-0.3%"},
    {metric:"Traffic/Week",name:"Newton County",price:"$2.004",percentage:"-0.6%"},
    {metric:"Traffic/Week",name:"Caroll County",price:"$1.865",percentage:"-0.3%"},
    {metric:"Traffic/Week",name:"Decatur/Avondale",price:"$1.144",percentage:"+5%"},
    {metric:"Traffic/Week",name:"Sandy Springs/Dunwoody",price:"$2.144",percentage:"-0.3%"},
    {metric:"Leases/Week",name:"Forsyth County",price:"$2.144",percentage:"+0.3%"},
    {metric:"Leases/Week",name:"Dawson County",price:"$2.004",percentage:"-0.6%"},
    {metric:"Leases/Week",name:"Newton County",price:"$1.865",percentage:"-+0.3%"},
    {metric:"Leases/Week",name:"Splading County",price:"$1.144",percentage:"-5%"},
    {metric:"Leases/Week",name:"Clayton",price:"$2.144",percentage:"-0.3%"}
  ]

}
