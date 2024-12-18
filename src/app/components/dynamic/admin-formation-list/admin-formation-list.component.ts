import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Formation } from 'src/app/classes/formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-admin-formation-list',
  templateUrl: './admin-formation-list.component.html',
  styleUrls: ['./admin-formation-list.component.css'],
})
export class AdminFormationListComponent implements OnInit {
  lesFormation: Formation[] = [];
  searchValue = '';
  typeValue = 0;

  constructor(
    private formationService: FormationService,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.formationService.getAllFormation().subscribe((data) => {
      this.lesFormation = data;
    });
  }

  deleteFormation(formationId: number) {
    if (confirm('Are you sure you want to delete this Activity ?')) {
      this.formationService.deleteFormation(formationId).subscribe(() => {
        this.lesFormation = this.lesFormation.filter(
          (formation) => formation.id !== formationId
        );
      });
    }
  }

  searchForm = this.fb.nonNullable.group({
    searchValue: [''],
    typeValue: [0],
  });
  fetchData(): void {
    this.formationService
      .getFormation(this.searchValue, this.typeValue)
      .subscribe((data) => {
        this.lesFormation = data;
      });
  }

  onSearchSubmit(): void {
    this.searchValue = this.searchForm.value.searchValue ?? '';
    this.fetchData();
  }
}
