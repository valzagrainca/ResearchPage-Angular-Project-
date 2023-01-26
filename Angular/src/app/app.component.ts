import { Component, ViewEncapsulation } from '@angular/core';
import { MetricService } from './services/metric-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [MetricService],
})
export class AppComponent {
  title = 'Angular';
}
