import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface TextAreaOptions {
  hideLabel: boolean;
}

@Component({
  selector: 'styled-textarea',
  templateUrl: './styled-textarea.component.html',
  styleUrls: ['./styled-textarea.component.scss']
})
export class StyledTextAreaComponent implements OnInit {
  @Input()
  id: string;

  @Input()
  form: FormGroup;

  @Input()
  placeholder: string = "What's on your mind?";

  @Input()
  label: string = 'no-label';

  @Input()
  size: string = 'normal';

  @Input()
  name: string = 'no-name';

  @Input()
  required: boolean = false;

  @Input()
  options: TextAreaOptions;

  constructor() {}

  ngOnInit(): void {}
}
