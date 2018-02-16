import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WarningalertComponent } from './feature/warningalert/warningalert.component';
import { SuccessalertComponent } from './feature/successalert/successalert.component';
import { AlertcontainerComponent } from './feature/alertcontainer/alertcontainer.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningalertComponent,
    SuccessalertComponent,
    AlertcontainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
