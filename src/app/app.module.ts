import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { LoginComponent } from '@app/pages/login/login.component';
import { HomeComponent } from '@app/pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { NewMessageComponent } from '@app/components/new-message';
import { MessageListComponent } from '@app/components/message-list';
import { MessageComponent } from '@app/components/message';
import { RepliesComponent } from '@app/components/replies';
import { NewReplyComponent } from '@app/components/new-reply/';

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
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
