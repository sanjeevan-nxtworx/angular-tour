import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainnavbarComponent } from './mainnavbar/mainnavbar.component';
import { HomePageComponent } from './home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainnavbarComponent, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-tour';
}
