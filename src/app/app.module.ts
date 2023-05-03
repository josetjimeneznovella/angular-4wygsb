import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialExampleModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { JtjInput } from './core/@component/jtj-input.component';
import { ToUpperCaseDirective } from './core/@directive/to-upper-case.directive';
import { ToLowerCaseDirective } from './core/@directive/to-lower-case.directive';
import { JtjCard } from './core/@component/jtj-card.component';
import { JtjTable } from './core/@component/jtj-table.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [HomeComponent, JtjInput, JtjCard, JtjTable, MenuComponent, ToUpperCaseDirective, ToLowerCaseDirective],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  bootstrap: [HomeComponent],
})
export class AppModule {}
