import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PageComponent, PageTitle, PageContent } from '@app/shared/page';
import { SimplePageComponent, SimplePageContent, SimplePageTitle } from '@app/shared/simple-page';
import { StyledButtonComponent } from '@app/shared/styled-button';
import { CardComponent } from '@app/shared/card';
import { TinyTextComponent } from '@app/shared/tiny-text';
import { StyledInputComponent } from '@app/shared/styled-input';
import { StyledTextAreaComponent } from '@app/shared/styled-textarea';

@NgModule({
  declarations: [
    // page component
    PageComponent,
    PageTitle,
    PageContent,
    // simple-page component
    SimplePageComponent,
    SimplePageContent,
    SimplePageTitle,
    // dashboard-page component
    // button component
    StyledButtonComponent,
    // card component
    CardComponent,
    // tiny text component
    TinyTextComponent,
    // styled input component
    StyledInputComponent,
    // styled textarea component
    StyledTextAreaComponent
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    // page component
    PageComponent,
    PageTitle,
    PageContent,
    // button component
    StyledButtonComponent,
    // card component
    CardComponent,
    // tiny text component
    TinyTextComponent,
    // styled input component
    StyledInputComponent,
    // styled textarea component
    StyledTextAreaComponent
  ]
})
export class SharedModule {}
