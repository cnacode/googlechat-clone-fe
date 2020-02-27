import { Component, OnInit, Directive } from '@angular/core';

@Directive({
  selector: 'simple-page-title'
})
export class SimplePageTitle {}

@Directive({
  selector: 'simple-page-content'
})
export class SimplePageContent {}

@Component({
  selector: 'simple-page',
  templateUrl: './simple-page.component.html',
  styleUrls: ['./simple-page.component.scss']
})
export class SimplePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
