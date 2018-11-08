import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';

import { AppComponent } from './app.component';
import { TableServiceService } from './table-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    CdkTableModule,
    BrowserAnimationsModule
  ],
  providers: [TableServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
