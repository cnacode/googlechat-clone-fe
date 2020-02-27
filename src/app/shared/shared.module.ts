import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent, PageTitle, PageContent } from '@app/shared/page';
import { SimplePageComponent, SimplePageContent, SimplePageTitle } from '@app/shared/simple-page';

@NgModule({
  declarations: [
    //page component
    PageComponent,
    PageTitle,
    PageContent,
    // simple-page component
    SimplePageComponent,
    SimplePageContent,
    SimplePageTitle
    // dashboard-page component
  ],
  imports: [CommonModule],
  exports: [PageComponent, PageTitle, PageContent]
})
export class SharedModule {}
