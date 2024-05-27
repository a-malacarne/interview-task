import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss'],
  imports: [ReactiveFormsModule, CommonModule],
})
export class FormModalComponent {
  formGroup = input.required<FormGroup>();
  title = input.required<string>();
  save = output<void>();
  close = output<void>();
}
