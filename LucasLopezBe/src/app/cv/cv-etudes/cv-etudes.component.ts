import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-etudes',
  templateUrl: './cv-etudes.component.html',
  styleUrls: ['./cv-etudes.component.css']
})
export class CvEtudesComponent implements OnInit {
  etudes = [{
    periode : '2008-2015',
    lieu : 'Institut la Sainte Union - Dour',
    diplome: 'CESS',
    themes : ['Math', 'Langues']
  },
    {
    periode : '2017-2021',
    lieu : 'HELHa - Mons',
    diplome: 'Bachelier en Informatique de Gestion',
    themes : ['Programmation', 'Web', 'Base de données', 'Réseau']
    }];
  constructor() { }

  ngOnInit(): void {
  }

  slideLeftOrRight(odd: boolean): string {
    if (odd) {
      return 'slideInRight';
    }
    return 'slideInLeft';
  }
}
