import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../services/my-service.service';

@Component({
  selector: 'app-servicedcomponent',
  standalone: true,
  imports: [],
  templateUrl: './servicedcomponent.component.html',
  styleUrl: './servicedcomponent.component.css',
  providers: [MyServiceService],
})
export class ServicedcomponentComponent implements OnInit {
  title = 'Service Example';
  greetingMessage: string = '';

  // Inject the service in the constructor
  constructor(private myService: MyServiceService) {}

  // Use the service in the ngOnInit lifecycle hook
  ngOnInit() {
    this.greetingMessage = this.myService.getGreetingMessage();
  }
}
