import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinerComponent } from './spiner/spiner.component';
import { ErrorPageComponent } from './error-page/error-page.component';



@NgModule({
  declarations: [
    SpinerComponent,
    ErrorPageComponent
  ],
  imports: [CommonModule],
  exports: [SpinerComponent,ErrorPageComponent],
})
export class SharedModule { }
