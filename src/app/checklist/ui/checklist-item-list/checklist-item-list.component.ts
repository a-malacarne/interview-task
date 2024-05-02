import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChecklistItem } from 'src/app/shared/interfaces/checklist-item';

@Component({
  standalone: true,
  selector: 'app-checklist-item-list',
  templateUrl: './checklist-item-list.component.html',
  styleUrls: ['./checklist-item-list.component.scss'],
  imports: [CommonModule],
})
export class ChecklistItemListComponent {
  @Input({ required: true }) checklistItems!: ChecklistItem[];
  @Output() delete = new EventEmitter<string>();
  @Output() edit = new EventEmitter<ChecklistItem>();
  @Output() toggle = new EventEmitter<string>();
}
