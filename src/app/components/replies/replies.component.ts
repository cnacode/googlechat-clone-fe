import { Component, OnInit, Input } from '@angular/core';
import { Message } from '@app/core/models';
import { MessageOptions } from '@app/components/message';

@Component({
  selector: 'replies',
  templateUrl: './replies.component.html',
  styleUrls: ['./replies.component.scss']
})
export class RepliesComponent implements OnInit {
  @Input()
  depth: number;

  //test value
  replies: Message[] = [
    {
      id: 'reply-1',
      body: 'this is the body of the message',
      createdAt: new Date(),
      owner: 'Steve',
      numberOfReplies: 24
    },
    {
      id: 'reply-2',
      body: 'this is the body of the message',
      createdAt: new Date(),
      owner: 'Steve',
      numberOfReplies: 24
    },
    {
      id: 'reply-3',
      body: 'this is the body of the message',
      createdAt: new Date(),
      owner: 'Steve',
      numberOfReplies: 24
    },
    {
      id: 'reply-4',
      body: 'this is the body of the message',
      createdAt: new Date(),
      owner: 'Steve',
      numberOfReplies: 24
    },
    {
      id: 'reply-5',
      body: 'this is the body of the message',
      createdAt: new Date(),
      owner: 'Steve',
      numberOfReplies: 24
    }
  ];

  currentDepth: number;

  options: MessageOptions;

  constructor() {}

  ngOnInit(): void {
    this.currentDepth = this.depth + 1;
    this.options = {
      depth: this.currentDepth
    };
  }
}
