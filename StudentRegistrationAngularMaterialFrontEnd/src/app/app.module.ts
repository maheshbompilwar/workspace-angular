import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
  
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
 
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
 
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SharedModule } from './mat-shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    ToolbarComponent   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 