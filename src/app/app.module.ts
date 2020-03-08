import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { LoginComponent } from '@app/login/login.component';
import { HomeComponent } from '@app/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent],
  imports: [
    // angular modules
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    // custom modules
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
