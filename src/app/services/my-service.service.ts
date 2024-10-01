import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  value: number = 0;
  constructor() {}

  // Simple method that returns a greeting message
  getGreetingMessage(): string {
    this.value++;
    return 'Hello from MyService! ' + this.value.toString();
  }
}
