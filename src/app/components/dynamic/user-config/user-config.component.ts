import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-user-config',
  templateUrl: './user-config.component.html',
  styleUrls: ['./user-config.component.css']
})
export class UserConfigComponent implements OnInit {
  loggedinUser !: User;
  editForm !: FormGroup;
  passwordForm !: FormGroup;

  constructor(private authService: AuthService, private userService: UserService, private fb: FormBuilder, private router: Router) {
  }
  ngOnInit(): void {
    const loggedInUserId = this.authService.getCurrentUserId();
    if (loggedInUserId) {
      this.userService.getUserById(Number(loggedInUserId)).subscribe(
        data => {
          this.loggedinUser = data;
          this.editForm = this.fb.group({
            username: [data.username, [Validators.required,Validators.minLength(3),]],
            email: [data.email, [Validators.required, Validators.email]],
          });
        }
      )
    }
    this.editForm = this.fb.group({
      username: ['', [Validators.required,Validators.minLength(3),]],
      email: ['', [Validators.required, Validators.email]],
    });
    this.passwordForm = this.fb.group({
      pass: ['', [
        Validators.minLength(3),
        Validators.maxLength(8),
        Validators.required
      ],],
      pass2: ['', [
        Validators.minLength(3),
        Validators.maxLength(8),
        Validators.required
      ],],
    });
  }

  changeInfo() {
    const username = this.editForm.get('username')?.value;
    const email = this.editForm.get('email')?.value;
    this.userService.updateUsernameOrEmail(this.loggedinUser, username, email).subscribe(
      updatedUser => {
        this.loggedinUser = updatedUser;
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Error updating user:', error);
      }
    )
  }

  changePassword() {
    const pass = this.passwordForm.get('pass')?.value;
    const pass2 = this.passwordForm.get('pass2')?.value;

    this.userService.getUserById(this.loggedinUser.id).subscribe((user) => {
      if (user && user.password === pass) {
        this.userService.updateUserPassword(user.id, pass2).subscribe(
          () => {
            alert("Password Changed");
          }
        );
      } else {
        alert('Old Password incorrect');
      }
    });
  }

}  
