import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-enfant-exercice1',
  templateUrl: './enfant-exercice1.component.html',
  styleUrls: ['./enfant-exercice1.component.css']
})
export class EnfantExercice1Component implements OnInit {

  @Input() value:any;

  constructor() { }

  ngOnInit(): void {
  }

}
