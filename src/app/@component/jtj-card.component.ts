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
  selector: 'jtj-card',
  template: `
  <mat-card class="example-card">
    <mat-card-header>
      <mat-card-title>{{title}}</mat-card-title>
      <mat-card-subtitle *ngIf="subtitle">{{subtitle}}</mat-card-subtitle>
    </mat-card-header>
    <mat-card-content>
      <ng-content></ng-content>
    </mat-card-content>
  </mat-card>
    `,
  styles: [`
      mat-card {
        width: 100%;
      }
  `]
})
export class JtjCard {

  @Input() title: string;

  @Input() subtitle: string;

}
