import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// allows for http request (via backend service)
import { HttpClientModule } from '@angular/common/http';
// allows us to use angular forms (e.g. with ngModel)
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
// new pages needed to be declared here
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { AddEntryComponent } from './pages/add-entry/add-entry.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, ProfileComponent, LoginComponent, AddEntryComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
