import { Component, OnInit } from '@angular/core';
import { Message } from '@app/core/models';
import { MessageOptions } from '@app/components/message';

@Component({
  selector: 'replies',
  templateUrl: './replies.component.html',
  styleUrls: ['./replies.component.scss']
})
export class RepliesComponent implements OnInit {
  message: Message = {
    id: 'id-of-message',
    body: 'this is the body of the message',
    createdAt: new Date(),
    owner: 'Steve',
    numberOfReplies: 24
  };

  replies: Message[] = [
    {
      id: 'id-of-message',
      body: 'this is the body of the message',
      createdAt: new Date(),
      owner: 'Steve',
      numberOfReplies: 24
    },
    {
      id: 'id-of-message',
      body: 'this is the body of the message',
      createdAt: new Date(),
      owner: 'Steve',
      numberOfReplies: 24
    },
    {
      id: 'id-of-message',
      body: 'this is the body of the message',
      createdAt: new Date(),
      owner: 'Steve',
      numberOfReplies: 24
    },
    {
      id: 'id-of-message',
      body: 'this is the body of the message',
      createdAt: new Date(),
      owner: 'Steve',
      numberOfReplies: 24
    },
    {
      id: 'id-of-message',
      body: 'this is the body of the message',
      createdAt: new Date(),
      owner: 'Steve',
      numberOfReplies: 24
    }
  ];

  messageOptions: MessageOptions = {
    showViewButton: false
  };

  constructor() {}

  ngOnInit(): void {}
}
