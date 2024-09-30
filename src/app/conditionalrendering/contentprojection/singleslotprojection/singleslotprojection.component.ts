import { Component, ViewEncapsulation } from '@angular/core';
import { SinglecardComponent } from './singlecard/singlecard.component';
import { MulticardComponent } from '../multicard/multicard.component';
import { ConditionalcardComponent } from '../conditionalcard/conditionalcard.component';

@Component({
  selector: 'app-singleslotprojection',
  standalone: true,
  imports: [SinglecardComponent, MulticardComponent, ConditionalcardComponent],
  templateUrl: './singleslotprojection.component.html',
  styleUrl: './singleslotprojection.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SingleslotprojectionComponent {}
