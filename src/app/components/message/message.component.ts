import { Component, OnInit, Input } from '@angular/core';
import { Message } from '@app/core/models';

export interface MessageOptions {
  showViewButton?: boolean;
  showReplyButton?: boolean;
  depth: number;
}

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input()
  content: Message = {
    id: 'id-1',
    body: 'This is the text of the message 1',
    createdAt: new Date('2019-01-05'),
    owner: 'owner1',
    numberOfReplies: 22
  };

  @Input()
  options: MessageOptions;

  replies = [];

  showReplies = false;
  showNewReply = false;
  loadingReplies = false;

  showReplyButton = true;
  showViewButton = true;
  showNumberOfReplies = true;
  currentDepth = 0;

  constructor() {}

  public toggleReplies() {
    if (!this.showReplies) {
      this.loadingReplies = true;
      console.log(this.loadingReplies);
      setTimeout(() => {
        this.showReplies = true;
        this.replies = [
          {
            id: 'id-1',
            body: 'This is the text of the message 1',
            createdAt: new Date('2019-01-05'),
            owner: 'owner1',
            numberOfReplies: 22
          },
          {
            id: 'id-1',
            body: 'This is the text of the message 1',
            createdAt: new Date('2019-01-05'),
            owner: 'owner1',
            numberOfReplies: 0
          }
        ];
        this.loadingReplies = false;
      }, 1000);
    } else {
      this.showReplies = false;
    }
  }

  public toggleNewReply() {
    this.showNewReply = !this.showNewReply;
  }

  ngOnInit(): void {
    this.currentDepth = JSON.parse(JSON.stringify(this.options.depth));

    console.log(this.currentDepth, this.content.id);
    if (this.currentDepth > 1) {
      this.showReplyButton = false;
      this.showNumberOfReplies = false;
    }
    if (this.currentDepth > 1) this.showViewButton = false;
    // format the date
    this.content.createdAt = this.content.createdAt.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}
