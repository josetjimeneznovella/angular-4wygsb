import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialExampleModule } from '../material.module';
import { FormFieldThemingExample } from './form-field-theming-example';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { JtjInput } from './@component/jtj-input.component';
import { UpperCaseInputDirective } from './@directive/upper-case-input.directive';

@NgModule({
  declarations: [FormFieldThemingExample, JtjInput, UpperCaseInputDirective],
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
