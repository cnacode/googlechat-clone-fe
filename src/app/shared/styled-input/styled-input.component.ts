import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
  id: string;

  @Input()
  form: FormGroup;

  @Input()
  type: string;

  @Input()
  label: string = 'no-label';

  @Input()
  size: string = InputWidth.Normal;

  @Input()
  name: string = 'no-name';

  @Input()
  required: boolean = false;

  constructor() {}
  ngOnInit(): void {}

  get isValid() {
    return this.form.controls[this.id].valid;
  }
}
