import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Customer, Customers} from '../customer';
import {EventBus2Service} from '../event-bus2.service';
import {EventData2} from '../eventData2';
import {Events2} from '../events2.enum';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  @Input() customers: Customers = [];
  @Output() customerDeleted: EventEmitter<Customer> = new EventEmitter<Customer>();

  constructor(private eventBus: EventBus2Service) {
  }

  ngOnInit(): void {
  }

  delete(index: number) {
    const customer: Customer = this.customers[index];
    this.customers.splice(index, 1);
    this.customerDeleted.next(customer);
    this.eventBus.next(
      new EventData2(Events2.CUSTOMER_DELETED, customer)
    );
  }
}
