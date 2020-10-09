import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../../../display-service/user';
import {Person} from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }
  getPersons(): Observable<Person[]> {
    return of([
      {firstname: 'Lucas', surname: 'Lopez'},
      {firstname: 'Zoé', surname: 'Lopez'},
      {firstname: 'Alexian', surname: 'Moins'}
    ]);
  }
}
