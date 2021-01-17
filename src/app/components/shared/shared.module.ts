import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PageComponent, PageTitle, PageContent } from '@app/components/shared/page';
import { SimplePageComponent, SimplePageContent, SimplePageTitle } from '@app/components/shared/simple-page';
import { StyledButtonComponent } from '@app/components/shared/styled-button';
import { CardComponent } from '@app/components/shared/card';
import { TinyTextComponent } from '@app/components/shared/tiny-text';
import { StyledInputComponent } from '@app/components/shared/styled-input';
import { StyledTextAreaComponent } from '@app/components/shared/styled-textarea';

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
