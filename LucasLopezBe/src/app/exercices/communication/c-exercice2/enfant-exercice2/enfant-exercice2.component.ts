import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-enfant-exercice2',
  templateUrl: './enfant-exercice2.component.html',
  styleUrls: ['./enfant-exercice2.component.css']
})
export class EnfantExercice2Component implements OnInit {

  @Output() randomValue: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  emitRandomValue() {
    this.randomValue.next(Math.random());
  }

}
