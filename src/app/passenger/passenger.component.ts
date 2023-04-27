import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { PassengerService} from './passenger.service';
/** @title Form field theming */
@Component({
  selector: 'passenger',
  templateUrl: 'passenger.component.html',
  styleUrls: ['passenger.component.css'],
})
export class PassengerComponent implements OnInit{
  
  formGroup: FormGroup;

  dataSource: any;

  columns: any;

  constructor(private formBuilder: FormBuilder, private passengerService: PassengerService) {
    
    this.formGroup = formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
    });

    passengerService.findAll(0, 10);
  }


  ngOnInit(): void {
    this.dataSource = this.getDataSource();
    this.columns = this.getColumns();
  }

  submit(event: any) {
    console.log(this.formGroup.controls['username'].value);
  }








  getDataSource(): any[] {
    return [
      { name: 'Felipe', mail: 'felipe@gmai.com' },
      { name: 'Cecilia', mail: 'cecilia@gmail.com' }
    ];
  }


  getColumns():  any[] {
    return [
      { caption: 'Name', field: 'name' },
      { caption: 'Mail', field: 'mail' }
    ];
  };
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
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

