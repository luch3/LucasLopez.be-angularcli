import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdb-exercice4',
  templateUrl: './cdb-exercice4.component.html',
  styleUrls: ['./cdb-exercice4.component.css']
})
export class CdbExercice4Component implements OnInit {

  entree: string = "";
  evenOdd: string ="";
  constructor() { }

  ngOnInit(): void {
  }

  calculerEvenOdd() {
    let num = Number(this.entree);
    if(isNaN(num)) {
      this.evenOdd="Ce n'est pas un nombre";
    } else {
      if(num%2==0) {
        this.evenOdd="Pair";
      } else {
        this.evenOdd="Impair";
      }
    }
  }
}
