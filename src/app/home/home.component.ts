import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { TableColumn } from '../core/@component/jtj-table.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class PassengerComponent implements OnInit{
  
  formGroup: FormGroup;

  dataSource: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

  columns: TableColumn[] = [
    { header: 'Name', id: 'name' },
    { header: 'Weight', id: 'weight' },
    { header: 'Symbol', id: 'symbol' }
  ];

  constructor(private formBuilder: FormBuilder) {
    
    this.formGroup = formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
    });

  }


  ngOnInit(): void {

  }

  submit(event: any) {
    console.log(this.formGroup.controls['username'].value);
  }
    
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

