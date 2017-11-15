import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitStatusButtonComponent } from './submit-status-button/submit-status-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SubmitStatusButtonComponent],
  exports: [
    SubmitStatusButtonComponent
  ]
})
export class BuildMotionFormsModule { }
