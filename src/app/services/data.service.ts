import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  // Method that returns an Observable
  getItems(): Observable<string[]> {
    // Simulated list of items
    const items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

    // Return an Observable that emits the items after a delay of 2 seconds
    return of(items).pipe(delay(2000));
  }

  getInterval(): Observable<number> {
    let count = 0;

    const observable = new Observable<number>(function subscribe(subscriber) {
      const id = setInterval(() => {
        count++;
        if (count === 15) subscriber.error(-1);
        if (count === 10) subscriber.complete();
        subscriber.next(count);
      }, 1000);
    });
    return observable;
    //    return observable.pipe(map((number) => number * 2));
  }
}
