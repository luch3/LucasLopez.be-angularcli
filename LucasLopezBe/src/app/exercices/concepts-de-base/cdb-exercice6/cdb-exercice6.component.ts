import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdb-exercice6',
  templateUrl: './cdb-exercice6.component.html',
  styleUrls: ['./cdb-exercice6.component.css']
})
export class CdbExercice6Component implements OnInit {
  nombres = [];
  entree = '';
  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.nombres[i] = Math.floor(Math.random() * 100);
    }
  }

  supprimerValeur(): void {
    if (isNaN(Number(this.entree))) {
      alert('Ce n\'est pas un nombre');
    } else {
      let ind = this.nombres.indexOf(Number(this.entree));
      let count = 0;
      while (ind !== -1) {
        this.nombres.splice(ind, 1);
        ind = this.nombres.indexOf(Number(this.entree));
        count ++;
      }
      if (count >= 1) {
        alert(count + ' occurence(s) de ' + this.entree + ' supprimée(s)');
      }
      this.entree = '';
    }
  }
}
