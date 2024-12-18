import { Component } from '@angular/core';
import { Formation } from 'src/app/classes/formation';
import { User } from 'src/app/classes/user';
import { FormationService } from 'src/app/services/formation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-statics',
  templateUrl: './statics.component.html',
  styleUrls: ['./statics.component.css'],
})
export class StaticsComponent {
  Users: User[] = [];
  formations: Formation[]=[];
  constructor(private userService: UserService,private formationService:FormationService) {}
  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.Users = data;
    });
    this.formationService.getAllFormation().subscribe((data) => {
      this.formations = data;
    });
  }
}
