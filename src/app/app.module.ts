import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistersComponent } from './registers/registers.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterDetailsComponent } from './register-details/register-details.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistersComponent,
    RegisterDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
