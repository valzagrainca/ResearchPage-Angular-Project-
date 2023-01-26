import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MetricService {

  constructor() { }

  metrics=[
    {metrics:"NER",dataFirstCity:"$1.785",percentageFirstCity:"-2.2%",dataSecondCity:"$1.748",percentageSecondCity:"-3.8%",dataThirdCity:"$1.798",percentageThirdCity:"-2.2%",show:true,default:true},
    {metrics:"NER/Sqft",dataFirstCity:"$1.86",percentageFirstCity:"-2.2%",dataSecondCity:"$1.86",percentageSecondCity:"-2.2%",dataThirdCity:"$2.12",percentageThirdCity:"-2.2%",show:true,default:true},
    {metrics:"Concessions",dataFirstCity:"$16",percentageFirstCity:"+8.9%",dataSecondCity:"$25",percentageSecondCity:"+19.3",dataThirdCity:"$15",percentageThirdCity:"-19.3%",show:true,default:true},
    {metrics:"Occupancy %",dataFirstCity:"93.4%",percentageFirstCity:"-2.2%",dataSecondCity:"93.4%",percentageSecondCity:"-2.2%",dataThirdCity:"93.4%",percentageThirdCity:"-2.2%",show:true,default:true},
    {metrics:"Leased %",dataFirstCity:"93.4%",percentageFirstCity:"-2.2%",dataSecondCity:"93.4%",percentageSecondCity:"-3.8%",dataThirdCity:"93.4%",percentageThirdCity:"-2.2%",show:true,default:true},
    {metrics:"ATR",dataFirstCity:"$1.785",percentageFirstCity:"-2.2%",dataSecondCity:"$1.748",percentageSecondCity:"-3.8%",dataThirdCity:"$1.798",percentageThirdCity:"-2.2%",show:false,default:false},
    {metrics:"ATR %",dataFirstCity:"$1.86",percentageFirstCity:"-2.2%",dataSecondCity:"$1.86",percentageSecondCity:"-2.2%",dataThirdCity:"$2.12",percentageThirdCity:"-2.2%",show:false,default:false},
    {metrics:"Traffic/Week",dataFirstCity:"8",percentageFirstCity:"+0.2%",dataSecondCity:"8",percentageSecondCity:"+2.0%",dataThirdCity:"8",percentageThirdCity:"+2.0%",show:true,default:true},
    {metrics:"Leases/Week",dataFirstCity:"2",percentageFirstCity:"+0.2%",dataSecondCity:"2",percentageSecondCity:"+2.0%",dataThirdCity:"2",percentageThirdCity:"+2.0%",show:true,default:true},
    {metrics:"Closing Ratio",dataFirstCity:"$16",percentageFirstCity:"+8.9%",dataSecondCity:"$25",percentageSecondCity:"+19.3",dataThirdCity:"$15",percentageThirdCity:"-19.3%",show:false,default:false},
    {metrics:"Rent",dataFirstCity:"93.4%",percentageFirstCity:"-2.2%",dataSecondCity:"93.4%",percentageSecondCity:"-2.2%",dataThirdCity:"93.4%",percentageThirdCity:"-2.2%",show:false,default:false},
    {metrics:"Rent/Sqft",dataFirstCity:"93.4%",percentageFirstCity:"-2.2%",dataSecondCity:"93.4%",percentageSecondCity:"-3.8%",dataThirdCity:"93.4%",percentageThirdCity:"-2.2%",show:false,default:false},
    {metrics:"Concessions Index",dataFirstCity:"8",percentageFirstCity:"+0.2%",dataSecondCity:"8",percentageSecondCity:"+2.0%",dataThirdCity:"8",percentageThirdCity:"+2.0%",show:false,default:false},
    {metrics:"RevPaU",dataFirstCity:"2",percentageFirstCity:"+0.2%",dataSecondCity:"2",percentageSecondCity:"+2.0%",dataThirdCity:"2",percentageThirdCity:"+2.0%",show:false,default:false}
  ]

  ResetValuesToDefault(){
    this.metrics.forEach(element => {
      if(element.default){
        element.show=true;
      }
      else{
        element.show=false;
      }
    });
  }
}
