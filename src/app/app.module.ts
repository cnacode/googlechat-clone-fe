import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { mockAuthenticationProvider } from '@app/core/mocks';
import { GridComponent } from '@app/shared/grid/grid.component';
import { LoginComponent } from '@app/login/login.component';
import { HomeComponent } from '@app/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, GridComponent, LoginComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
  providers: [mockAuthenticationProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
