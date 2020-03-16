import { Component, OnInit } from '@angular/core';
import { Message } from '@app/core/models';
import { MessageOptions } from '../message/message.component';

@Component({
  selector: 'message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [
    {
      id: 'id-1',
      body: 'This is the text of the message 1',
      createdAt: new Date('2019-01-05'),
      owner: 'owner1',
      numberOfReplies: 22
    },
    {
      id: 'id-2',
      body: 'This is the text of the message 2',
      createdAt: new Date('2019-01-06'),
      owner: 'owner2',
      numberOfReplies: 29
    },
    {
      id: 'id-3',
      body: `Here is a much much much 
      much much much much much much much
      much much much much much much
      much much much much much much
      much much much much much much
      much much longer message`,
      createdAt: new Date('2019-01-06'),
      owner: 'owner2',
      numberOfReplies: 1
    },
    {
      id: 'id-4',
      body: `Here is a much much much 
      much much much much much much much
      much much much much much much
      much much much much much much
      much much much much much much
      much much longer message`,
      createdAt: new Date('2019-01-06'),
      owner: 'owner2',
      numberOfReplies: 0
    },
    {
      id: 'id-5',
      body: `Here is a much much much 
      much much much much much much much
      much much much much much much
      much much much much much much
      much much much much much much
      much much longer message`,
      createdAt: new Date('2019-01-06'),
      owner: 'owner2',
      numberOfReplies: 1
    }
  ];

  options: MessageOptions = {
    depth: 0
  };

  constructor() {}

  ngOnInit(): void {}
}
