import { Component, OnInit } from '@angular/core';

enum GridTypes {
  Simple,
  Dashboard
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  private type: GridTypes;

  // set default grid type to Simple
  constructor(type: GridTypes = 0) {
    this.type = type;
  }

  ngOnInit(): void {}
}
