import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';

/** @title Form field theming */
@Component({
  selector: 'jtj-table',
  template: `
  <table mat-table [dataSource]="_dataSource">
    <ng-container *ngFor="let c of columns" [matColumnDef]="c.caption">
      <ng-container>
        <th mat-header-cell *matHeaderCellDef>
          {{c.caption}}
        </th>
      </ng-container>
      <td mat-cell *matCellDef="let element">
        {{element[c.field]}}
      </td>
    </ng-container>
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  </table>
    `,
  styles: [`
  `]
})
export class JtjTable implements OnInit {


  public _dataSource = new MatTableDataSource;

  public displayedColumns: string[];

  @Input() columns: TableColumn[];

  @Input() set dataSource(data: any[]) {
    this.setDataSource(data);
  }

  ngOnInit(): void {
    this.displayedColumns = this.columns.map((tableColumn: TableColumn) => tableColumn.caption);
  }

  setDataSource(data: any) {
    this._dataSource = new MatTableDataSource<any>(data);
  }
}

export interface TableColumn {
  caption: string;
  field: string;
}