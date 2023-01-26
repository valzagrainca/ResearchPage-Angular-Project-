import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-list',
  templateUrl: './navbarlist.component.html',
  styleUrls: ['./navbarlist.component.css'],
})
export class NavbarlistComponent {
  @Input()
  checked: string = 'notchecked';
}
