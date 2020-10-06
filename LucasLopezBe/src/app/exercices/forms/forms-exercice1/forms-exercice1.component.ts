import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-exercice1',
  templateUrl: './forms-exercice1.component.html',
  styleUrls: ['./forms-exercice1.component.css']
})
export class FormsExercice1Component implements OnInit {
  nom: any;
  prenom: any;

  constructor() { }

  ngOnInit(): void {
  }

  logForm(): void {

  }
}
