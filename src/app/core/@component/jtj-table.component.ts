import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';

/** @title Form field theming */
@Component({
  selector: 'jtj-table',
  template: `
  <table mat-table [dataSource]="matTableDataSource">
    <ng-container *ngFor="let column of columns" [matColumnDef]="column.caption">
      <ng-container>
        <th mat-header-cell *matHeaderCellDef>
          {{column.caption}}
        </th>
      </ng-container>
      <td mat-cell *matCellDef="let element">
        {{element[column.field]}}
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

  @Input() columns: TableColumn[];

  @Input() set dataSource(data: any[]) {
    this.setDataSource(data);
  }

  public matTableDataSource = new MatTableDataSource;

  public displayedColumns: string[];

  ngOnInit(): void {
    this.displayedColumns = this.columns.map((tableColumn: TableColumn) => tableColumn.caption);
  }

  setDataSource(data: any) {
    this.matTableDataSource = new MatTableDataSource<any>(data);
  }
}

export interface TableColumn {
  caption: string;
  field: string;
}