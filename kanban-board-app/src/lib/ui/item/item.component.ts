import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input()
  title = 'item'; // title: string = "item";

  @Input()
  id = 'item';

  @Output()
  delteItemEvent = new EventEmitter<number>();
  deleteItem(id: number) {
    this.delteItemEvent.emit(id);
    console.log('delete buttion pressed on Item id: ' + id);
  }

  showDeleteButton = false;

  @Output()
  onTitleChange = new EventEmitter<string>();  // onTitleChange : EventEmitter<string>    wäre die Zuweisung des Datentyps


  onChange(event) {
    this.title = event.target.value;
  }

}
