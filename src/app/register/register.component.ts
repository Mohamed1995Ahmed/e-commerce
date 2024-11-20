import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  registerForm: FormGroup = this.fb.group(
    {
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(50),
        ],
      ],
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ],
      ],
      rePassword: [null, [Validators.required]],
      phone: [
        null,
        [
          Validators.required, // Validation for 11-digit phone number
          Validators.pattern(/^01[0-9]{9}$/), // Example: phone number pattern for Egyptian numbers
        ],
      ],
    },
    { validators: this.passwordMatchValidator }
  );

  constructor(private _auth: AuthService) {}

  // Custom validator to check if password and rePassword match
  passwordMatchValidator(form: AbstractControl) {
    const password = form.get('password')?.value;
    const rePassword = form.get('rePassword')?.value;
    return password === rePassword ? null : { mismatch: true };
  }

  // Submit the form
  onSubmit() {
    if (this.registerForm.valid) {
      this._auth.setregister(this.registerForm.value).subscribe({
        next: (res) => {
          console.log('Registration successful:', res);
          if (res.message === 'success') {
            console.log('success');
            this.router.navigate(['/login']);
          } else {
            console.error('Unexpected response message:', res.Message);
          }
        },
        error: (err) => {
          console.error('Registration failed:', err);
          // Log the error details for further investigation
          if (err.status === 409) {
            console.error('Conflict error:', err.error);
          }
        },
      });
    } else {
      console.warn('Form is invalid.');
    }
  }
}
