import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StyledTextAreaComponent } from './styled-textarea.component';

const MockStyledTextAreaInput = {
  options: {
    hideLabel: false
  }
};

describe('StyledTextAreaComponent', () => {
  let component: StyledTextAreaComponent;
  let fixture: ComponentFixture<StyledTextAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StyledTextAreaComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyledTextAreaComponent);
    component = fixture.componentInstance;
    component.options = MockStyledTextAreaInput.options;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
