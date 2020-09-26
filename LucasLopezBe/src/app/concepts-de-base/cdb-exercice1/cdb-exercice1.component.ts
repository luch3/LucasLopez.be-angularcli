import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdb-exercice1',
  templateUrl: './cdb-exercice1.component.html',
  styleUrls: ['./cdb-exercice1.component.css']
})
export class CdbExercice1Component implements OnInit {
  maVariable: string = 'Je suis le contenu de "maVariable"';
  constructor() { }

  ngOnInit(): void {
  }

}
