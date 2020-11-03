import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http';

import { ParentTransactionsComponent } from './parent-transactions/parent-transactions.component';
import { ChildTransactionsComponent } from './child-transactions/child-transactions.component';


// http://localhost:8080/childs/121/
@NgModule({
  declarations: [
    AppComponent,
    ParentTransactionsComponent,
    ChildTransactionsComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
