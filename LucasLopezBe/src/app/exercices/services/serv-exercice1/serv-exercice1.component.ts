import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../../display-service/user';
import {Observable, Subscription} from 'rxjs';
import {Person} from './person';
import {PersonService} from './person.service';

@Component({
  selector: 'app-serv-exercice1',
  templateUrl: './serv-exercice1.component.html',
  styleUrls: ['./serv-exercice1.component.css']
})
export class ServExercice1Component implements OnInit, OnDestroy {

  persons: Person[];
  getPersonsSubscription: Subscription;
  obsGetPerson$: Observable<Person[]>;

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.getPersons();
    this.obsGetPerson$ = this.personService.getPersons();
  }
  ngOnDestroy(): void {
    this.getPersonsSubscription.unsubscribe();
  }

  private getPersons(): void {
    this.getPersonsSubscription = this.personService
      .getPersons()
      .subscribe((persons) => this.persons = persons);
  }
}
