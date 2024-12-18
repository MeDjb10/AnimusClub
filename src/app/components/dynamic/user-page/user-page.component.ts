import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Formation } from 'src/app/classes/formation';
import { User } from 'src/app/classes/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  loggedinUser !: User;
  editForm !: FormGroup;

  constructor(private authService: AuthService, private userService: UserService, private fb: FormBuilder, private router: Router) {
  }
  ngOnInit(): void {
    this.editForm = this.fb.group({
      username: ['', [Validators.minLength(3), Validators.required]],
      email: ['', [Validators.required, Validators.email]],
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

    const loggedInUserId = this.authService.getCurrentUserId();
    if (loggedInUserId) {
      this.userService.getUserById(Number(loggedInUserId)).subscribe(
        data => {
          this.loggedinUser = data;
        }
      )
    }
  }

  toTrainings() {
    this.router.navigate(['/user/uTrainings']);
  }
  toConfig() {
    this.router.navigate(['/user/uConfig']);
  }

  onClick(id: number) {
    this.router.navigate(['/formationList/' + id]);

  }
}
