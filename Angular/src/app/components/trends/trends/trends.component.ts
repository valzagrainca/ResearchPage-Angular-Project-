import { Component } from '@angular/core';
import { MetricService } from 'src/app/services/metric-service.service';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent {
  constructor(private metricservice:MetricService){}
  title="Market Snapshot";
  portofolioStatus:any='notchecked';
  
  ngOnInit(){
    this.metricservice.darkmodeStatus.subscribe(darkmode=>this.portofolioStatus=darkmode);
  }
  
}
