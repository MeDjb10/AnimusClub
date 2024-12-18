// change-password.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.changePasswordForm = this.fb.group({
      username: ['', Validators.required],
      oldPassword: [
        '',
        [Validators.minLength(3), Validators.maxLength(8), Validators.required],
      ],
      newPassword: [
        '',
        [Validators.minLength(3), Validators.maxLength(8), Validators.required],
      ],
    });
  }

  onChangePassword() {
    const username = this.changePasswordForm.get('username')?.value;
    const oldPassword = this.changePasswordForm.get('oldPassword')?.value;
    const newPassword = this.changePasswordForm.get('newPassword')?.value;

    this.userService.getUserByUsername(username).subscribe((user) => {
      if (user && user.password === oldPassword) {
        this.userService.updateUserPassword(user.id, newPassword).subscribe(
          () => {
            alert("Password Changed");
            this.router.navigate(['/dashboard']);
          }
        );
      } else {
        alert('Old Password incorrect');
      }
    });
  }
}
