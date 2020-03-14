import { Component, OnInit, Input } from '@angular/core';
import { Message } from '@app/core/models';

export interface MessageOptions {
  showViewButton: boolean;
}

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input()
  content: Message;

  @Input()
  options: MessageOptions = {
    showViewButton: true
  };

  constructor() {}

  ngOnInit(): void {}
}
