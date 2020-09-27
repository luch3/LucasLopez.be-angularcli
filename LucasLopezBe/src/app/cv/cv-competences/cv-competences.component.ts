import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-competences',
  templateUrl: './cv-competences.component.html',
  styleUrls: ['./cv-competences.component.css']
})
export class CvCompetencesComponent implements OnInit {

  technos = [{
    path: 'angularjs-3-1175272.svg',
    tooltip: 'Angular',
  }, {
    path: 'angularjs-3-1175272.svg',
    tooltip: 'Angular',
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
