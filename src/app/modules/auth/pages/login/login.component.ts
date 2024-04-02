import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.min(6)],
    });
  }

  onSubmit() {
    console.warn({
      login: this.loginForm,
    });

    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          console.warn({
            response,
          });

          this.authService.saveAuthInfo(response);
        },
        error: (error) => {
          console.error({
            error,
          });
        },
      });
    }
  }
}
