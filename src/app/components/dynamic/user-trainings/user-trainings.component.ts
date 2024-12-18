import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Formation } from 'src/app/classes/formation';
import { User } from 'src/app/classes/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-trainings',
  templateUrl: './user-trainings.component.html',
  styleUrls: ['./user-trainings.component.css']
})
export class UserTrainingsComponent implements OnInit {

  loggedinUser !: User;
  formation !: Formation[];
  editForm !: FormGroup;

  constructor(private authService: AuthService, private userService: UserService,private router: Router) {
  }
  ngOnInit(): void {

    const loggedInUserId = this.authService.getCurrentUserId();
    if (loggedInUserId) {
      this.userService.getUserById(Number(loggedInUserId)).subscribe(
        data => {
          this.loggedinUser = data;
          this.formation = data.formation;
        }
      )
    }

  }

  onClick(id: number) {
    this.router.navigate(['/formationList/' + id]);

  }


}
