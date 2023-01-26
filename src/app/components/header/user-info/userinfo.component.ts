import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css'],
})
export class UserinfoComponent {
  @Input()
  checked: string = 'notchecked';
}
