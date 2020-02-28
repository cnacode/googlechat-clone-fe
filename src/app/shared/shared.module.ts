import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent, PageTitle, PageContent } from '@app/shared/page';
import { SimplePageComponent, SimplePageContent, SimplePageTitle } from '@app/shared/simple-page';
import { ButtonComponent } from '@app/shared/button';
import { CardComponent } from '@app/shared/card';
import { TinyTextComponent } from '@app/shared/tiny-text';

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
    TinyTextComponent
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
    TinyTextComponent
  ]
})
export class SharedModule {}
