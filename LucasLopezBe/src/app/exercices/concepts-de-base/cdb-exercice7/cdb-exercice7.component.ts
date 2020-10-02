import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdb-exercice7',
  templateUrl: './cdb-exercice7.component.html',
  styleUrls: ['./cdb-exercice7.component.css']
})
export class CdbExercice7Component implements OnInit {
  num: any;

  constructor() { }

  ngOnInit(): void {
  }

  numValidation(): void {
    if (!isNaN(this.num)) {
      if (this.num > 100) {
        this.num = 100;
      } else if (this.num < 1) {
        this.num = 1;
      } else {
        this.num = this.num;
      }
    } else {
      this.num = 1;
    }
  }

  alertNum(): void {

  }
}
