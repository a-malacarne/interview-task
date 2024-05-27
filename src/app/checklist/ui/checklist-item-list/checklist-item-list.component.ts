import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { ChecklistItem } from 'src/app/shared/interfaces/checklist-item';

@Component({
  standalone: true,
  selector: 'app-checklist-item-list',
  templateUrl: './checklist-item-list.component.html',
  styleUrls: ['./checklist-item-list.component.scss'],
  imports: [CommonModule],
})
export class ChecklistItemListComponent {
  checklistItems = input.required<ChecklistItem[]>();
  delete = output<string>();
  edit = output<ChecklistItem>();
  toggle = output<string>();
}
