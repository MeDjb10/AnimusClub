import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Commentaire } from 'src/app/classes/commentaire';
import { Formation } from 'src/app/classes/formation';
import { User } from 'src/app/classes/user';
import { Helpers } from 'src/app/helpers/helpers';
import { AuthService } from 'src/app/services/auth.service';
import { FormationService } from 'src/app/services/formation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-selected-formation',
  templateUrl: './selected-formation.component.html',
  styleUrls: ['./selected-formation.component.css'],
})


export class SelectedFormationComponent implements OnInit {
  idf: number = 0;
  selectedTraining?: Formation;
  newComment: Commentaire = new Commentaire(0, '', undefined);
  lesComments?: Commentaire[];
  lesUsers?: User[];
  commentForm!: FormGroup;
  loggedinUser !: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formationService: FormationService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.idf = this.activatedRoute.snapshot.params['idf'];

    this.commentForm = this.formBuilder.nonNullable.group({
      comment: ['', [Validators.required]],
    });

    this.userService.getUsers().subscribe((data) => {
      this.lesUsers = data;
    });

    this.formationService.getFormationById(this.idf).subscribe({
      next: (formation) => {
        this.selectedTraining = formation;
        console.log(this.selectedTraining);
      },
      error: (error) => {
        console.error(error);
      },
    });

    const loggedInUserId = this.authService.getCurrentUserId();
    this.userService.getUserById(Number(loggedInUserId)).subscribe({
      next: (u) => {
        this.loggedinUser = u;
        console.log(this.selectedTraining);
      },
      error: (error) => {
        console.error(error);
      },
    })
  }

  getUser(userId: number): User | undefined {
    return this.lesUsers?.find((user) => user.id === userId);
  }

  GoBack() {
    this.router.navigate(['/formationList']);
  }

  onSubmitComment() {
    const loggedInUserId = this.authService.getCurrentUserId();
    console.log(loggedInUserId);

    if (loggedInUserId && this.commentForm.value.comment) {
      const newComment: Commentaire = new Commentaire(
        +loggedInUserId,
        this.commentForm.value.comment,
        Helpers.generateUniqueId()
      );
      this.selectedTraining!.comments.push(newComment);

      this.formationService.updateFormation(this.selectedTraining!).subscribe({
        next: (updatedFormation) => {
          console.log('Formation mise à jour avec succès', updatedFormation);
          this.commentForm.reset();
        },
        error: (error) => {
          console.error('Erreur lors de la mise à jour de la formation', error);
        },
      });
    }
  }

  enrollState: string = "Enroll me";
  enrollBool: boolean = false;

  enrollMe() {

    const enrolledTraining: Formation | undefined = this.selectedTraining;

    if (enrolledTraining != undefined) {
      this.loggedinUser.formation.push(enrolledTraining);
      console.log(this.loggedinUser.formation);
      this.enrollState = "Enrolled";
      this.userService.updateUser(this.loggedinUser!).subscribe(
        (updatedUser) => {
          console.log('User updated successfully:', updatedUser);
        },
        (error) => {
          console.error('Error updating user:', error);
        }
      );
      this.enrollBool = true;
    } else {
      this.enrollBool = false;
    }
  }

  isEnrolled():boolean{
    return this.loggedinUser.formation.some(
      (data) => data.id === this.selectedTraining?.id
    );
  }
}

