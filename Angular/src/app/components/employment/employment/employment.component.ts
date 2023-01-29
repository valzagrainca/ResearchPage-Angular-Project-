import { Component } from '@angular/core';
import { MetricService } from 'src/app/services/metric-service.service';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css'],
})
export class EmploymentComponent {
  portofolioStatus: any = 'notchecked';
  constructor(private metricservice: MetricService) {}
  ngOnInit() {
    this.metricservice.darkmodeStatus.subscribe(
      (darkmode) => (this.portofolioStatus = darkmode)
    );
  }
  title = 'Employment';
}
