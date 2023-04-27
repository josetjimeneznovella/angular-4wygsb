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
import { AirlinesComponent } from './airlines/airlines.component';

@NgModule({
  declarations: [AirlinesComponent, JtjInput, JtjCard, ToUpperCaseDirective, ToLowerCaseDirective],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AirlinesComponent],
})
export class AppModule {}
