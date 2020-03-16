import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'new-reply',
  templateUrl: './new-reply.component.html',
  styleUrls: ['./new-reply.component.scss']
})
export class NewReplyComponent implements OnInit {
  @Input()
  parentId: string;

  messageForm: FormGroup;
  loading = false;
  textareaOptions = {
    hideLabel: true
  };

  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      message: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}
}
