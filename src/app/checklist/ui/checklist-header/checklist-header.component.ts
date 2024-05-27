import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Checklist } from 'src/app/shared/interfaces/checklist';

@Component({
  standalone: true,
  selector: 'app-checklist-header',
  templateUrl: './checklist-header.component.html',
  styleUrls: ['./checklist-header.component.scss'],
  imports: [RouterModule],
})
export class ChecklistHeaderComponent {
  checklist = input.required<Checklist>();
  addItem = output<void>();
  resetChecklist = output<string>();
}
