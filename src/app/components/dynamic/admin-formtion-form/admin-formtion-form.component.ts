import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/classes/formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-admin-formtion-form',
  templateUrl: './admin-formtion-form.component.html',
  styleUrls: ['./admin-formtion-form.component.css'],
})
export class AdminFormtionFormComponent {
  formationForm!: FormGroup;
  isEditMode = false;
  formationId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private formationService: FormationService
  ) {}

  ngOnInit() {
    this.initForm();
    this.formationId = this.route.snapshot.params['id'];
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.isEditMode = true;
        this.loadFormation(this.formationId);
      }
    });
  }

  initForm() {
    this.formationForm = this.fb.group({
      id: [],
      name: ['', Validators.required],
      description: ['', Validators.required],
      photo: ['', [Validators.required,Validators.pattern("^../assets/[a-zA-Z0-9 ^éèàù]+.(jpg|jpeg|png)")]],
      date: ['', Validators.required],
      price: ['', Validators.required],
      nbParticipant: ['', Validators.required],
      certif: [false],
      workshop: [false],
      location: ['', Validators.required],
      comments: [[]],
    });
  }

  loadFormation(id: number) {
    this.formationService.getFormationById(id).subscribe((formation) => {
      if (formation) {
        this.formationForm.patchValue(formation);
      }
    });
  }

  onSubmit() {
    const formationData = this.formationForm.value;

    if (this.isEditMode) {
      formationData.id = this.formationId;
      this.updateFormation(formationData);
    } else {
      const existingComments = this.formationForm.get('comments')?.value;
      formationData.comments = existingComments || [];

      this.addFormation(formationData);
    }
  }

  addFormation(formation: Formation) {
    this.formationService.addFormation(formation).subscribe(() => {
      this.router.navigate(['/dashboard/ActivityList']);
    });
  }

  updateFormation(formation: Formation) {
    this.formationService.updateFormation(formation).subscribe(() => {
      this.router.navigate(['/dashboard/ActivityList']);
    });
  }
}
