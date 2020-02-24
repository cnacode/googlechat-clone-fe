import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '@app/core/authentication';
import { debounce } from 'lodash';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: string | any = '';
  usernameInvalid = false;
  passwordInvalid = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }

    this.setValidity = debounce(this.setValidity, 200);
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.onChanges();
  }

  onSubmit(): void {
    const {
      controls: { username, password },
      invalid
    } = this.loginForm;

    this.submitted = true;
    // stop here if form is invalid
    if (invalid) {
      return;
    }

    this.loading = true;

    const navigateToHome = () => {
      this.router.navigate([this.returnUrl]);
    };
    const handleError = error => {
      this.error = error;
      this.loading = false;
    };

    this.authenticationService
      .login(username.value, password.value)
      .pipe(first())
      .subscribe(navigateToHome, handleError);
  }

  onChanges(): void {
    const {
      loginForm: { valueChanges }
    } = this;

    valueChanges.subscribe(this.setValidity);
  }

  setValidity = () => {
    const {
      submitted,
      loginForm: {
        controls: { username, password }
      }
    } = this;

    this.usernameInvalid = submitted && username.errors != undefined;
    this.passwordInvalid = submitted && password.errors != undefined;
  };

  get username() {
    return this.loginForm.controls.username;
  }
  get password() {
    return this.loginForm.controls.password;
  }
}
