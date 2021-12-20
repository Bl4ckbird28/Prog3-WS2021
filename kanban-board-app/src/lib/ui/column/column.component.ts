import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemModel } from '../../data-access/models/itemModel';

@Component({
  selector: 'column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class ColumnComponent {
  @Input()
  title = 'column';

  @Input()
  idColumn: number;

  @Input()
  items: ItemModel[];

  @Output()
  deleteColumnEvent = new EventEmitter();

  @Output()
  onChangeColumnTitle = new EventEmitter<string>();

    showDeleteButton: boolean = false;

  deleteColumn() {
    this.deleteColumnEvent.emit();
  }

  addEmptyItem() {
    this.items.push({
      id: (Math.random() * 10000) | 0,
      title: 'empty',
      position: 0,
      timestamp: '',
    });
  }

  deleteItem(item:ItemModel) {
    var index = this.items.indexOf(item);
    this.items.splice(index, 1);   // nehm ab stelle "index" 1 Element raus
  }

  changeItemName(item, event) {
    item.title = event;
    // console.log(item);
  }

  onChange(event) {
    this.onChangeColumnTitle.emit(event.target.value);
  }

  ngAfterViewInit() {
    let element = document.getElementById("column" + this.idColumn.toString())

    if(element != null) {
      element.focus();
    } else {
      console.log("Couldnt find Column of id: " + this.idColumn.toString());
    }
  }

}
