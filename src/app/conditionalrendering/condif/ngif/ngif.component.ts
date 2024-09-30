import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { NgifitemComponent } from './ngifitem/ngifitem.component';

@Component({
  selector: 'app-ngif',
  standalone: true,
  imports: [NgifitemComponent, NgFor, NgIf],
  templateUrl: './ngif.component.html',
  styleUrl: './ngif.component.css',
})
export class NgifComponent {
  items = [
    {
      name: 'Banana',
      type: 'Fruit',
      cost: 10.0,
      unit: 'dozen',
      qty: 0,
    },
    {
      name: 'Avacados',
      type: 'Vegetable',
      cost: 15.0,
      unit: 'pc',
      qty: 5,
    },
    {
      name: 'Pasta',
      type: 'Starch',
      cost: 12.0,
      unit: 'Kg',
      qty: 12,
    },
    {
      name: 'Milk',
      type: 'Diary',
      cost: 15.0,
      unit: 'litre',
      qty: 2,
    },
  ];
}
