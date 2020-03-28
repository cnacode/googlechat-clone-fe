import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '@app/core/services';

@Component({
  selector: 'new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit {
  messageForm: FormGroup;
  loading = false;
  error: string = '';

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
    const handleError = error => {
      this.error = error;
      this.loading = false;
    };
    const handleSuccess = () => {
      this.loading = false;
      this.messageService.getMessages(0).subscribe();
      const newMessageTextArea = this.messageForm.get('message');
      newMessageTextArea.setValue('');
    };
    const validate = () => {
      const { invalid } = this.messageForm;
      if (invalid) {
        const { errors } = this.messageForm.get('message');
        if (errors?.required) {
          this.error = 'reply can not be empty';
        }
        return false;
      }
      return true;
    };

    const valid = validate();
    if (!valid) return;

    this.loading = true;
    const { message } = this.messageForm.getRawValue();
    this.messageService.createMessage(message).subscribe(handleSuccess, handleError);
  }
}
