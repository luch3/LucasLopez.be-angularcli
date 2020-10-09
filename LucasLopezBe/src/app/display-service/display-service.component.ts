import {Component, OnDestroy, OnInit} from '@angular/core';
import {CounterService} from './counter.service';
import {UserService} from './user.service';
import {User} from './user';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-display-service',
  templateUrl: './display-service.component.html',
  styleUrls: ['./display-service.component.css']
})
export class DisplayServiceComponent implements OnInit, OnDestroy {
  users: User[];
  getUsersSubscription: Subscription;

  constructor(private counterService: CounterService, private userService: UserService) { }

  increment(): void {
    this.counterService.increment();
  }
  getNum(): number {
    return this.counterService.num;
  }
  getUsers(): void {
    this.getUsersSubscription = this.userService
      .getUsers()
      .subscribe((users) => this.users = users);
  }
  ngOnInit(): void {
    this.getUsers();
  }
  ngOnDestroy(): void {
    if (this.getUsersSubscription) {
      this.getUsersSubscription.unsubscribe();
    }
  }

}
