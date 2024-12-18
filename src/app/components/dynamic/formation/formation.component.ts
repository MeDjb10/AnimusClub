import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css'],
})
export class FormationComponent {
  @Input() id!: number;
  @Input() name!: string;
  @Input() img!: string;
}
