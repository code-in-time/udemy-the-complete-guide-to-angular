import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.componenet';
import { CustomComponent } from './custom/custom.component';
import { LearnClassChangeComponent } from './feature/learn-class-change/learn-class-change.component';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    CustomComponent,
    LearnClassChangeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
