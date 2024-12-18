import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-div',
  templateUrl: './login-div.component.html',
  styleUrls: ['./login-div.component.css'],
})
export class LoginDivComponent  {
 loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.minLength(3), Validators.required]],
      password: [
        '',
        [Validators.minLength(3), Validators.maxLength(8), Validators.required],
      ],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      this.authService.login(username, password);
    }
  }
  
 
}
