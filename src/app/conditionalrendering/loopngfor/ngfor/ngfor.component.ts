import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgforitemComponent } from './ngforitem/ngforitem.component';

@Component({
  selector: 'app-ngfor',
  standalone: true,
  imports: [NgforitemComponent, NgFor],
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.css',
})
export class NgforComponent {
  items = [
    {
      name: 'Banana',
      type: 'Fruit',
      cost: 10.0,
      unit: 'dozen',
      qty: 10,
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
