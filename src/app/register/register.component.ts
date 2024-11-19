import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  registerForm: FormGroup = this.fb.group(
    {
      firstName: [
        null,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
        ],
      ],
      lastName: [
        null,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
        ],
      ],
      userName: [
        null,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
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
      confirmPassword: [null, [Validators.required]],
      role: new FormControl('eveloper'), // Default value as 'eveloper'
    },
    { validators: this.passwordMatchValidator }
  );

  constructor(private _auth: AuthService) {}

  ngOnInit(): void {}

  // Custom validator to check if password and confirmPassword match
  passwordMatchValidator(form: AbstractControl) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  // Submit the form
  onSubmit() {
    if (this.registerForm.valid) {
      this._auth.setregister(this.registerForm.value).subscribe({
        next: (res) => {
          console.log('Registration successful:', res);
          if (res.Message === 'Login Successfully') {
            console.log('Success condition met.');
            this.router.navigate(['/login']);
          } else {
            console.error('Unexpected response message:', res.Message);
          }
        },
        error: (err) => {
          console.error('Registration failed:', err);
        },
      });
    } else {
      console.warn('Form is invalid.');
    }
  }
}
