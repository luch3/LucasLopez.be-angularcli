import {Component, OnInit} from '@angular/core';
import {Customer, Customers} from '../customer';
import {EventBus2Service} from '../event-bus2.service';
import {Events2} from '../events2.enum';

@Component({
  selector: 'app-customer-container',
  templateUrl: './customer-container.component.html',
  styleUrls: ['./customer-container.component.css']
})
export class CustomerContainerComponent implements OnInit {

  customers: Customers = [];

  constructor(private eventBus: EventBus2Service) {
  }

  ngOnInit(): void {
    this.customers = this.getCustomers();
    this.eventBus.on(Events2.CUSTOMER_DELETED, this.logOutput);
  }

  private getCustomers(): Customers {
    return [
      {firstname: 'Lucas', lastname: 'Lopez'},
      {firstname: 'Zoé', lastname: 'Lopez'},
      {firstname: 'Alexian', lastname: 'Moins'}
    ];
  }

  logOutput(customer: Customer) {
    console.log(customer);
  }
}
