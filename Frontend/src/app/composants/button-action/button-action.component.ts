import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-action',
  templateUrl: './button-action.component.html',
  styleUrls: ['./button-action.component.scss']
})
export class ButtonActionComponent {

  @Input()
  isImporterVisible = true ;
  @Input()
  isNouveauVisible = true ;
  @Input()
  isExporterVisbile = true ; 

  @Output()
  ClickEvent = new EventEmitter();

  ButtonNouveauClick() : void {
    this.ClickEvent.emit();

  }

}
