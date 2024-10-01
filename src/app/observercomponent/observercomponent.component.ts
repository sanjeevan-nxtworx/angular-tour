import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-observercomponent',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './observercomponent.component.html',
  styleUrl: './observercomponent.component.css',
})
export class ObservercomponentComponent implements OnInit {
  title = 'Observable Example';
  items: string[] = [];
  loading: boolean = true;
  count = 0;
  // Inject the service in the constructor
  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Subscribe to the Observable from the service
    this.dataService.getItems().subscribe((data) => {
      this.items = data;
      this.loading = false; // Stop loading when data is received
    });

    this.dataService.getInterval().subscribe(
      (val) => {
        this.count = val;
      },
      (error) => {
        this.count = error;
      },
      () => {
        this.count = 0;
      }
    );
  }
}
