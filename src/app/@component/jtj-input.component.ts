import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

/** @title Form field theming */
@Component({
  selector: 'jtj-input',
  template: `
  <mat-form-field appearance="outline">
    <mat-label>{{label}}</mat-label>
    <input matInput #input formControlName="{{id}}" maxlength="{{maxLength}}" />
    <mat-hint align="end">{{input.value.length}}/{{maxLength}}</mat-hint>
    <mat-icon matSuffix color="primary">{{icon}}</mat-icon>
    <mat-error *ngIf="formControl.hasError('required')">{{label}} is a required field</mat-error>
    <mat-error *ngIf="formControl.hasError('email')">Please insert a valid mail</mat-error>
  </mat-form-field>
    `,
  styles: [],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class JtjInput {
  @Input() id: string;

  @Input() label: string;

  @Input() maxLength: any;

  @Input() icon: string;

  constructor(private controlContainer: ControlContainer) {}

  get form(): FormGroup {
    return this.controlContainer.control as FormGroup;
  }

  get formControl(): AbstractControl {
    return this.form.get(this.id) as AbstractControl;
  }
}
