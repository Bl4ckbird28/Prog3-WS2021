import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BoardComponent } from '../lib/ui/board/board.component';
import { ColumnComponent } from '../lib/ui/column/column.component';
import { ItemComponent } from '../lib/ui/item/item.component';
import { ToolbarComponent } from '../lib/ui/toolbar/toolbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, ToolbarComponent, BoardComponent, ColumnComponent, ItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
