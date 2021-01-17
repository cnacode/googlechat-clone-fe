import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { LoginComponent } from '@app/pages/login/login.component';
import { HomeComponent } from '@app/pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './components/shared/shared.module';
import { NewMessageComponent } from '@app/components/new-message';
import { MessageListComponent } from '@app/components/message-list';
import { MessageComponent } from '@app/components/message';
import { RepliesComponent } from '@app/components/replies';
import { NewReplyComponent } from '@app/components/new-reply/';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { JwtInterceptor } from '@app/core/interceptors';
import { ErrorInterceptor } from '@app/core/interceptors';
import { MockingInterceptor } from '@app/core/interceptors';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NewMessageComponent,
    MessageListComponent,
    MessageComponent,
    RepliesComponent,
    NewReplyComponent
  ],
  imports: [
    // angular modules
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    // custom modules
    SharedModule,

    // thirdparty modules
    NgxPaginationModule,

    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    //data mocking
    { provide: HTTP_INTERCEPTORS, useClass: MockingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
