import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Auth} from './auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth: Auth;

  constructor() { }

  store(mail: string, password: string): void {
    this.auth = {mail, password};
  }
  getAuth(): Observable<Auth> {
    return of({
      mail: this.auth.mail, password: this.auth.password
    });
  }
}
