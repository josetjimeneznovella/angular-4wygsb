import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialExampleModule } from '../material.module';
import { FormFieldThemingExample } from './form-field-theming-example';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { JtjInput } from './@component/jtj-input.component';
import { ToUpperCaseDirective } from './@directive/to-upper-case.directive';
import { ToLowerCaseDirective } from './@directive/to-lower-case.directive';
import { JtjCard } from './@component/jtj-card.component';

@NgModule({
  declarations: [FormFieldThemingExample, JtjInput, JtjCard, ToUpperCaseDirective, ToLowerCaseDirective],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  bootstrap: [FormFieldThemingExample],
})
export class AppModule {}
