import { Component } from '@angular/core';
import { MetricService } from 'src/app/services/metric-service.service';


@Component({
  selector: 'app-portfolio-header',
  templateUrl: './portfolio-header.component.html',
  styleUrls: ['./portfolio-header.component.css'],
})
export class PortfolioHeaderComponent {
  constructor(private metricservice:MetricService){}
 
  darkmodecheckbox: string = 'notchecked';

  ngOnInit(){
    this.metricservice.darkmodeStatus.subscribe(darkmode => this.darkmodecheckbox = darkmode);
  }
  
  onCheckboxChangeDarkMode(data: string) {
    this.metricservice.changeDarkmodeStatus(data);
  }

}
