import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '@app/core/authentication';
import { GridTypes } from '@app/shared/page';

/**
 * This is the login page, includes:
 * 1. A login form
 * 2. Logic for submitting the form
 * 3. Logic to show form validation and http errors
 *
 * @export
 * @class LoginComponent
 * @implements {OnInit}
 *
 * @property gridType {GridTypes} determines grid type for this page
 * @property loginForm {FormGroup} contains the login form object
 * @property loading { boolean } loading state for form, used to disable submit button
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  gridType: GridTypes = GridTypes.Simple;
  loginForm: FormGroup;
  loading = false;
  returnUrl: string;
  errors: string[] | any = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    if (this.authenticationService.currentUser) {
      this.router.navigate(['/']);
    }

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.errors = [];
    const { invalid } = this.loginForm;

    // if form is invalid, update page errors to show user
    if (invalid) {
      const { errors: usernameErrors } = this.loginForm.get('username');
      const { errors: passwordErrors } = this.loginForm.get('password');

      if (usernameErrors?.required) {
        this.errors.push('Username is required.');
      }
      if (passwordErrors?.required) {
        this.errors.push('Password is required.');
      }
      return;
    }

    this.loading = true;

    const navigateToHome = () => {
      this.router.navigate([this.returnUrl]);
    };

    const handleError = error => {
      this.errors.push(error);
      this.loading = false;
    };

    const { username, password } = this.loginForm.getRawValue();
    this.authenticationService
      .login(username, password)
      .pipe(first())
      .subscribe(navigateToHome, handleError);
  }

  get username() {
    return this.loginForm.controls.username;
  }
  get password() {
    return this.loginForm.controls.password;
  }
}
