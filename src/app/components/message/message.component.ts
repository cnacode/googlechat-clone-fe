import { Component, OnInit, Input } from '@angular/core';
import { Message } from '@app/core/models';
import { MessageService } from '@app/core/services';

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
  content: Message;

  @Input()
  options: MessageOptions;

  replies = [];

  showReplies = false;
  showNewReply = false;
  loadingReplies = false;
  repliesError = '';

  showReplyButton = true;
  showViewButton = true;
  showNumberOfReplies = true;
  currentDepth = 0;

  constructor(private messageService: MessageService) {}

  public toggleReplies() {
    const handleMessages = ({ messages }) => {
      this.replies = messages;
      this.loadingReplies = false;
      this.repliesError = '';
      this.showReplies = true;
    };

    const handleError = e => {
      this.repliesError = 'failed to load messages';
      this.replies = [];
      this.loadingReplies = false;
    };

    //if replies aren't showing, show them
    if (!this.showReplies) {
      this.loadingReplies = true;
      this.messageService.getReplies(this.content.id).subscribe(handleMessages, handleError);
    } else {
      this.showReplies = false;
      this.loadingReplies = false;
    }
  }

  public toggleNewReply() {
    this.showNewReply = !this.showNewReply;
  }

  ngOnInit(): void {
    this.currentDepth = Object.assign({}, { ...this.options }.depth);

    if (this.currentDepth > 1) {
      this.showReplyButton = false;
      this.showNumberOfReplies = false;
    }
    if (this.currentDepth > 1) this.showViewButton = false;
  }
}
