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
  idItem = 'item';

  @Output()
  deleteItemEvent = new EventEmitter();

  @Output()
  onTitleChange = new EventEmitter<string>();  // onTitleChange : EventEmitter<string>    wäre die Zuweisung des Datentyps

  showDeleteButton = false;

  deleteItem() {
    this.deleteItemEvent.emit();
  }

  onChange(event) {
    this.onTitleChange.emit(event.target.value);
  }

  ngAfterViewInit() {
    let element = document.getElementById("item" + this.idItem.toString())

    if(element != null) {
      element.focus();
    } else {
      console.log("Couldnt find Item of id: " + this.idItem.toString());
    }
  }

}
