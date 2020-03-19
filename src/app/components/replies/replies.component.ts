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
  replies: Message[];

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
