import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.min(6)],
      c_password: ['', Validators.min(6)],
    });
  }

  onSubmit() {
    console.warn({
      form: this.registerForm,
    });
    if (this.registerForm.valid) {
      // llamar api
      this.authService.register(this.registerForm.value).subscribe({
        next: (response) => {
          this.authService.saveAuthInfo(response);
        },
        error: (error) => {
          console.warn({ error });
        },
      });
    }
  }
}
