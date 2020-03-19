import { Component, OnInit } from '@angular/core';
import { Message } from '@app/core/models';
import { MessageOptions } from '../message/message.component';
import { MessageService } from '@app/core/services';

@Component({
  selector: 'message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  currentPage: number = 0;
  total: number = 0;
  //test
  messages: Message[] = [];
  options: MessageOptions;
  error: string = 'There are no messages yet.';

  constructor(private MessagesService: MessageService = MessagesService) {
    this.options = {
      depth: 0
    };
  }

  ngOnInit(): void {
    this.MessagesService.getMessages().subscribe(this.handleMessages, this.handleError);
  }

  handleMessages = ({ messages, total }) => {
    console.log(messages);
    this.messages = messages;
    this.total = total;
  };

  handleError = () => {
    this.error = 'failed to load messages';
    this.messages = [];
    this.total = 0;
  };
}
