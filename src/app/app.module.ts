import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http' 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { C404Component } from './components/c404/c404.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserViewComponent,
    UserCardComponent,
    UserFormComponent,
    C404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
