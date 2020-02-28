import { Component, OnInit, Input } from '@angular/core';

export enum InputWidth {
  Wide = 'wide',
  Normal = 'normal'
}

@Component({
  selector: 'styled-input',
  templateUrl: './styled-input.component.html',
  styleUrls: ['./styled-input.component.scss']
})
export class StyledInputComponent implements OnInit {
  @Input()
  type: string = 'text';

  @Input()
  label: string = 'input label not set';

  @Input()
  width: string = InputWidth.Normal;

  constructor() {}
  ngOnInit(): void {}
}
