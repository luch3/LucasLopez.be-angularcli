import { Component, OnInit } from '@angular/core';
import {EventBusService} from './event-bus.service';
import {EventData} from './event-data';
import {Events} from './events.enum';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit {

  constructor(private eventBus: EventBusService) { }

  ngOnInit(): void {
    this.eventBus.next(
      new EventData(Events.ON_USER_CONNECTED, 'Paul')
    );
  }

}
