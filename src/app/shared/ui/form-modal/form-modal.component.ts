import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss'],
  imports: [ReactiveFormsModule, CommonModule],
})
export class FormModalComponent {
  @Input({ required: true }) formGroup!: FormGroup;
  @Input({ required: true }) title!: string;
  @Output() save = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();
}
