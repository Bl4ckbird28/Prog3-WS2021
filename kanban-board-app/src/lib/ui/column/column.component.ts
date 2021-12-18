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
  id: number;

  @Input()
  items: ItemModel[];

  @Output() deleteColumnEvent = new EventEmitter<number>();

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

  deleteItem(id: number) {
    this.items = this.items.filter(element => element.id != id);
  }

  showDeleteButton: boolean = false;

  changeItemName(item, event) {
    console.log(item);
    item.title = event;
    console.log(event);
  }

}
