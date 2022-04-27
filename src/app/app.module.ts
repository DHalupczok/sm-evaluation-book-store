import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {BookSearchComponent} from './book-search/book-search.component';
import {MdbFormsModule} from "mdb-angular-ui-kit/forms";
import {BookItemComponent} from './book-item/book-item.component';
import {BookListComponent} from './book-list/book-list.component';
import {TableHeadComponent} from './table-head/table-head.component';
import {SearchButtonComponent} from './search-button/search-button.component';
import {ResultsQuantityComponent} from './results-quantity/results-quantity.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BookSearchComponent,
    BookItemComponent,
    BookListComponent,
    TableHeadComponent,
    SearchButtonComponent,
    ResultsQuantityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
