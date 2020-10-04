import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-experiences',
  templateUrl: './cv-experiences.component.html',
  styleUrls: ['./cv-experiences.component.css']
})
export class CvExperiencesComponent implements OnInit {

  experiences = [{
    titre: 'VR Hackathon Mons',
    date: 'Du 18/11/16 au 20/11/16',
    description: 'Participation à un Hackathon sur le thème de la réalité virtuelle. Avec une team composée de 4 étudiants de l\'UMons, nous avons développé un jeu d\'énigme en VR se passant dans la ville de Mons à l\'aide d\'Unity.'
  }, {
    titre: 'Expérience test',
    date: '01/01/1970',
    description: 'Voici une expérience test pour l\'affichage de la Timeline.'
  }, {
    titre: 'Expérience test',
    date: '01/01/1970',
    description: 'Voici une expérience test pour l\'affichage de la Timeline.'
  }, {
    titre: 'Expérience test',
    date: '01/01/1970',
    description: 'Voici une expérience test pour l\'affichage de la Timeline.'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
