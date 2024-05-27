import { Component, effect, inject, signal } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ChecklistService } from '../shared/data-access/checklist.service';
import { Checklist } from '../shared/interfaces/checklist';
import { FormModalComponent } from '../shared/ui/form-modal/form-modal.component';
import { ModalComponent } from '../shared/ui/modal/modal.component';
import { ChecklistListComponent } from './ui/check-list/checklist-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [ChecklistListComponent, ModalComponent, FormModalComponent],
})
export default class HomeComponent {
  formBuilder = inject(FormBuilder);
  checklistService = inject(ChecklistService);

  checklistBeingEdited = signal<Partial<Checklist> | null>(null);

  checklistForm = this.formBuilder.nonNullable.group({
    title: [''],
  });

  constructor() {
    effect(() => {
      const checklist = this.checklistBeingEdited();

      if (!checklist) {
        this.checklistForm.reset();
      } else {
        this.checklistForm.patchValue({
          title: checklist.title,
        });
      }
    });
  }
}
