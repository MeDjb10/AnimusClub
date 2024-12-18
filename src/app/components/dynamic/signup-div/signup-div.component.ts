import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup-div',
  templateUrl: './signup-div.component.html',
  styleUrls: ['./signup-div.component.css'],
})
export class SignupDivComponent {
  signupForm!: FormGroup;

  

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      username: ['', [Validators.minLength(3), Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.minLength(3), Validators.maxLength(8), Validators.required],
      ],
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      const newUser: User = {
        id: 0, 
        username: this.signupForm.value.username,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        isAdmin: false,
        isMember: true,
        formation:[]
      };

      this.userService.addUser(newUser).subscribe(() => {
        this.authService.setAuthenticated(true);
        this.router.navigate(['/home']);
      });
    }
  }
}
