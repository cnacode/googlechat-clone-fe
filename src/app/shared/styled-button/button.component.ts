import { Component, OnInit, Input } from '@angular/core';
import { Button } from 'protractor';

export enum ButtonStyles {
  Primary = 'primary',
  Secondary = 'secondary'
}
@Component({
  selector: 'styled-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class StyledButtonComponent implements OnInit {
  @Input()
  style: ButtonStyles = ButtonStyles.Primary;

  @Input()
  size: string;

  @Input()
  type: string;

  @Input()
  disabled: boolean = false;

  isPrimary: boolean;
  isWide: boolean;

  constructor() {}

  ngOnInit(): void {
    //set isPrimary
    this.isPrimary = this.style === ButtonStyles.Primary;
    this.isWide = this.size == 'wide';
  }
}
