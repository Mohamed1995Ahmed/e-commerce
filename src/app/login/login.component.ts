import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import Cookies from 'js-cookie'; // Correct import

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);

  // Corrected form name to `loginForm`
  loginForm: FormGroup = this.fb.group({
    LoginMethod: [
      null,
      [Validators.required, Validators.minLength(4), Validators.maxLength(15)],
    ],
    password: [
      null,
      [Validators.required, Validators.minLength(5), Validators.maxLength(10)],
    ],
  });
  data: any;

  constructor(private _auth: AuthService) {}

  // Submit the login form
  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login form data:', this.loginForm.value);

      // Call the login service
      this._auth.setlogin(this.loginForm.value).subscribe({
        next: (res) => {
          console.log('Login response:', res);

          if (res && res.StatusCode === 200) {
            console.log(res.Token);
            if (res && res.Result && res.Result.Token) {
              console.log('Token:', res.Result.Token);
              // Correctly log the token from `Result`
              this._auth.setToken(res.Result.Token); // Store the token in cookies
              this.data = this._auth.getToken();
              console.log('this is my token', this.data);
              this._auth.saveuserdata();
            } else {
              console.error('Token is missing in the response.');
            }
            this.router.navigate(['/home']);
          } else {
            console.error(
              'Login failed:',
              res?.Message || 'No message available'
            );
          }
        },
        error: (err) => {
          console.error('Login failed:', err);

          // Log validation errors if present
          if (err.error?.errors) {
            console.error('Validation errors:', err.error.errors);
          }
        },
      });
    } else {
      console.warn('Form is invalid.');
    }
  }
}
