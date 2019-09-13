import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// allows us to use angular forms (e.g. with ngModel)
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
// new pages needed to be declared here
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, ProfileComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
