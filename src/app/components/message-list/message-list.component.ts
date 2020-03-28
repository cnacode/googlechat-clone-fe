import { Component, OnInit } from '@angular/core';
import { Message } from '@app/core/models';
import { MessageOptions } from '../message/message.component';
import { MessageService } from '@app/core/services';
import { Observable, BehaviorSubject, of } from 'rxjs';

@Component({
  selector: 'message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  currentPage: number = 1;
  total: number = 0;
  loading: boolean = false;
  //test
  messages: BehaviorSubject<Message[]> = new BehaviorSubject([]);
  options: MessageOptions;
  error: string = 'There are no messages yet.';

  constructor(private MessagesService: MessageService = MessagesService) {
    this.options = {
      depth: 0
    };
    this.MessagesService.watch(this.handleMessages);
  }

  ngOnInit(): void {
    this.getPaginatedMessages(this.currentPage);
  }

  getPaginatedMessages = page => {
    this.currentPage = page;
    this.loading = true;
    this.MessagesService.getMessages(page - 1).subscribe(this.handleMessages, this.handleError);
  };

  handleMessages = ({ messages, total }) => {
    this.messages.next(messages);
    this.total = total;
    this.loading = false;
  };

  handleError = () => {
    this.error = 'failed to load messages';
    this.messages.next([]);
    this.total = 0;
    this.loading = false;
  };
}
