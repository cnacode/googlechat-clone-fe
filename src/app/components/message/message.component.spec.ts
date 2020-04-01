import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MessageComponent } from './message.component';

const MockMessageInput = {
  content: {
    id: '32335513',
    body: 'message-body',
    createdAt: '02-02-2020',
    owner: 'message-owner',
    numberOfReplies: 666
  },
  currentDepth: 1
};

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessageComponent],
      imports: [HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    component.content = MockMessageInput.content;
    component.currentDepth = MockMessageInput.currentDepth;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
