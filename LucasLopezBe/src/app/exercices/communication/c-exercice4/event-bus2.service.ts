import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {EventData2} from './eventData2';
import {Events2} from './events2.enum';
import {filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventBus2Service {

  private _bus: Subject<EventData2> = new Subject<EventData2>();

  constructor() {
  }

  on(eventType: Events2, action: any) {
    this._bus.pipe(
      filter((e: EventData2) => e.eventType === eventType),
      map((e: EventData2) => e.data)
    ).subscribe(action);
  }

  next(eventData: EventData2) {
    this._bus.next(eventData);
  }
}
