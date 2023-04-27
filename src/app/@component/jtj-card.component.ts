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
      <span class="spacer"></span>
      <button *ngIf="filter" mat-mini-fab color="primary" class="filter">
        <mat-icon>filter_list</mat-icon>
      </button>
      <button *ngIf="filter" mat-mini-fab color="primary" class="filter">
        <mat-icon>download</mat-icon>
      </button>
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

      mat-card-header {
        margin: 0 0 20px 0;
      }

      button {
        border-radius: 4px !important;
        margin-right: 6px;
      }
  `]
})
export class JtjCard {

  @Input() title: string;

  @Input() filter: any;

  @Input() download: any;

}