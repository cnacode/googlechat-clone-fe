import { Component, OnInit, Directive, ViewEncapsulation, Input } from '@angular/core';

export enum GridTypes {
  Simple = 'simple',
  Dashboard = 'dashboard'
}

@Directive({
  selector: 'page-title'
})
export class PageTitle {}

@Directive({
  selector: 'page-content'
})
export class PageContent {}

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PageComponent implements OnInit {
  @Input('grid-type')
  grid: GridTypes = GridTypes.Simple;

  isSimple: boolean;
  isDashboard: boolean;
  // set default grid type to Simple
  constructor() {
    this.grid === GridTypes.Simple ? (this.isSimple = true) : (this.isDashboard = true);
  }

  ngOnInit(): void {}
}
