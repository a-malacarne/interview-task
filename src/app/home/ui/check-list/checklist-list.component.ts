import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Checklist } from 'src/app/shared/interfaces/checklist';

@Component({
  standalone: true,
  selector: 'app-checklist-list',
  templateUrl: './checklist-list.component.html',
  styleUrls: ['./checklist-list.component.scss'],
  imports: [CommonModule, RouterModule],
})
export class ChecklistListComponent {
  checklists = input.required<Checklist[]>();
  delete = output<string>();
  edit = output<Checklist>();
}
