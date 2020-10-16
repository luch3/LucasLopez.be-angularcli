import { Injectable } from '@angular/core';
import {EventData} from './event-data';
import {Subject} from 'rxjs';
import {Events} from './events.enum';
import {filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  // tslint:disable-next-line:variable-name
  private _bus: Subject<EventData> = new Subject<EventData>();

  constructor() { }

  listen(eventType: Events, action: any): void {
    this._bus.pipe(
      filter((e: EventData) => e.eventTypes === eventType),
      map((e: EventData) => e.data)
    ).subscribe(data => action(data));
  }
  next(e: EventData): void {
    this._bus.next(e);
  }
}
