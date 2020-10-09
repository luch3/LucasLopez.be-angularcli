import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  set num(value: number) {
    this._num = value;
  }

  get num(): number {
    return this._num;
  }

  increment(): void {
    this._num++;
  }

  private _num: number = 0;

  constructor() { }
}
