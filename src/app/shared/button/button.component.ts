import { Component, OnInit, Input } from '@angular/core';

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary'
}
@Component({
  selector: 'styled-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input()
  type: ButtonType = ButtonType.Primary;

  isPrimary: boolean;
  isSecondary: boolean;

  constructor() {
    this.type === ButtonType.Primary ? (this.isPrimary = true) : (this.isSecondary = true);
  }

  ngOnInit(): void {}
}
