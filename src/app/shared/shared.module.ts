import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent, PageTitle, PageContent } from '@app/shared/page';
import { SimplePageComponent, SimplePageContent, SimplePageTitle } from '@app/shared/simple-page';
import { ButtonComponent } from '@app/shared/button';
import { CardComponent } from '@app/shared/card';
import { TinyTextComponent } from '@app/shared/tiny-text';
import { StyledInputComponent } from '@app/shared/styled-input';

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
    ButtonComponent,
    // card component
    CardComponent,
    // tiny text component
    TinyTextComponent,
    // styled input component
    StyledInputComponent
  ],
  imports: [CommonModule],
  exports: [
    // page component
    PageComponent,
    PageTitle,
    PageContent,
    // button component
    ButtonComponent,
    // card component
    CardComponent,
    // tiny text component
    TinyTextComponent,
    // styled input component
    StyledInputComponent
  ]
})
export class SharedModule {}