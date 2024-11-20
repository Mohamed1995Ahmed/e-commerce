import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import Cookies from 'js-cookie';

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

  loginForm: FormGroup = this.fb.group({
    email: [
      null,
      [Validators.required, Validators.minLength(4), Validators.maxLength(50)],
    ],
    password: [
      null,
      [Validators.required, Validators.minLength(5), Validators.maxLength(10)],
    ],
  });

  constructor(private _auth: AuthService) {}

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login form data:', this.loginForm.value);

      this._auth.setlogin(this.loginForm.value).subscribe({
        next: (res) => {
          console.log('Login response:', res);

          if (res && res.message === 'success') {
            console.log(res.token);
            if (res && res.token) {
              console.log('Token:', res.token);
              this._auth.setToken(res.token); // Store the token in cookies
              this._auth.saveuserdata();
              this.router.navigate(['/home']);
            } else {
              console.error('Token is missing in the response.');
            }
          } else {
            console.error(
              'Login failed:',
              res?.Message || 'No message available'
            );
          }
        },
        error: (err) => {
          console.error('Login failed:', err);
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
