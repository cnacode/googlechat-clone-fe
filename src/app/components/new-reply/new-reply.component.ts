import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '@app/core/services';

@Component({
  selector: 'new-reply',
  templateUrl: './new-reply.component.html',
  styleUrls: ['./new-reply.component.scss']
})
export class NewReplyComponent {
  @Input()
  parentId: string;

  messageForm: FormGroup;
  loading = false;
  error: string = '';
  success: string = '';

  textareaOptions = {
    hideLabel: true
  };

  constructor(private formBuilder: FormBuilder, private messageService: MessageService) {
    this.messageForm = this.formBuilder.group({
      message: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const validate = () => {
      const { invalid } = this.messageForm;
      if (invalid) {
        const { errors } = this.messageForm.get('message');
        if (errors?.required) {
          this.error = 'Reply can not be empty.';
        }
        return false;
      }
      return true;
    };
    const handleError = error => {
      console.log(error);
      this.error = error;
      this.loading = false;
    };
    const handleSuccess = () => {
      this.loading = false;
      this.messageService.getMessages(0).subscribe();
      const newMessageTextArea = this.messageForm.get('message');
      newMessageTextArea.setValue('');
      this.success = 'Reply Posted!';
    };

    const valid = validate();
    if (!valid) return;
    this.loading = true;
    const { message } = this.messageForm.getRawValue();
    this.messageService.createMessage(message, this.parentId).subscribe(handleSuccess, handleError);
  }
}
