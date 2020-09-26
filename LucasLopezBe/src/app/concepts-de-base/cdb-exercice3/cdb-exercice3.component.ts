import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdb-exercice3',
  templateUrl: './cdb-exercice3.component.html',
  styleUrls: ['./cdb-exercice3.component.css']
})
export class CdbExercice3Component implements OnInit {
  valeur:number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  augmenterValeur() : void {
    this.valeur++;
  }
  reduireValeur(): void{
    this.valeur--;
  }

}
