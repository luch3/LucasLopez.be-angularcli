import { Injectable } from '@angular/core';
import {User} from './user';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): Observable<User[]> {
    return of([
      {lastname: 'Dupont', firstname: 'Bob'},
      {lastname: 'Lopez', firstname: 'Lucas'}
    ]);
  }
}
