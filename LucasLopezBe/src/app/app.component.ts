import {Component, OnInit} from '@angular/core';
import * as AOS from 'aos';
/*import {EventBusService} from './communication/event-bus.service';
import {Events} from './communication/events.enum';*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Lucas Lopez - Etudiant en informatique';
  constructor(/*private eventBus: EventBusService*/) {
  }
  ngOnInit(): void {
    AOS.init();
    /*this.eventBus.listen(
      Events.ON_USER_CONNECTED,
      (userName) => console.log(userName)
    );*/
  }
}
