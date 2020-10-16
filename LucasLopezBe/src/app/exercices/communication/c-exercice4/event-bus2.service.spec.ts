import { TestBed } from '@angular/core/testing';

import { EventBus2Service } from './event-bus2.service';

describe('EventBus2Service', () => {
  let service: EventBus2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventBus2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
