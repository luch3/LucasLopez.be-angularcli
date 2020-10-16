import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-enfant-exercice3',
  templateUrl: './enfant-exercice3.component.html',
  styleUrls: ['./enfant-exercice3.component.css']
})
export class EnfantExercice3Component implements OnInit {

  @Input() value;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  emitValue(value: string) {
    this.valueChange.next(value);
  }
}
