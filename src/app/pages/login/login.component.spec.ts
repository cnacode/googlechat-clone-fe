import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule, HttpClientModule, AppRoutingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a card and a login-form', () => {
    expect(fixture.debugElement.query(By.css('.card'))).toBeDefined();
    expect(fixture.debugElement.query(By.css('#login-form'))).toBeDefined();
  });

  it('should have required fields', () => {
    let username = component.loginForm.controls['username'];
    let password = component.loginForm.controls['password'];
    expect(username.valid).toBeFalsy();

    username.setValue('cnacode');
    password.setValue('testuser');
    expect(username.valid).toBeTruthy();
    expect(password.valid).toBeTruthy();
  });

  it('should have a submit button', () => {
    expect(fixture.debugElement.query(By.css('btn'))).toBeDefined();
  });
});
