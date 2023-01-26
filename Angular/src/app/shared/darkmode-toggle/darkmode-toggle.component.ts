import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-darkmode-toggle',
  templateUrl: './darkmode-toggle.component.html',
  styleUrls: ['./darkmode-toggle.component.css']
})
export class DarkmodeToggleComponent {
  darkmode: boolean=false;
  @Output()
  checkeddarkmode: EventEmitter<string>=new EventEmitter<string>();

  changedCheckbox(){
    this.darkmode=(!this.darkmode);
    if(this.darkmode===false){
      this.checkeddarkmode.emit('notchecked');
    }
    else{
      this.checkeddarkmode.emit('checked');
    }
  }
}
