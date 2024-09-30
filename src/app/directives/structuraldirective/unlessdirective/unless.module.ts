import { NgModule } from '@angular/core';
import { UnlessDirective } from './unlessdirective.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    UnlessDirective, // Declare the directive
  ],
  imports: [CommonModule],
  providers: [],
})
export class UnlessModule {}
