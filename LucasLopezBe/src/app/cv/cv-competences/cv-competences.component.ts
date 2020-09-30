import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-competences',
  templateUrl: './cv-competences.component.html',
  styleUrls: ['./cv-competences.component.css']
})
export class CvCompetencesComponent implements OnInit {

  technos = [{
    path: 'angularjs-1-1175270.svg',
    tooltip: 'Angular',
  }, {
    path: 'android-246-1175274.svg',
    tooltip: 'Android',
  }, {
    path: 'bootstrap-6-1175203.svg',
    tooltip: 'Bootstrap',
  }, {
    path: 'c-58-1175247.svg',
    tooltip: 'C',
  }, {
    path: 'cplusplus-1175243.svg',
    tooltip: 'C++',
  }, {
    path: 'csharp-1175240.svg',
    tooltip: 'C#',
  }, {
    path: 'css3-10-1175238.svg',
    tooltip: 'CSS',
  }, {
    path: 'html5-41-1175209.svg',
    tooltip: 'HTML',
  }, {
    path: 'docker-12-1175229.svg',
    tooltip: 'Docker',
  }, {
    path: 'git-16-1175195.svg',
    tooltip: 'Git',
  }, {
    path: 'java-4.svg',
    tooltip: 'Java',
  }, {
    path: 'jee-2.svg',
    tooltip: 'JEE',
  }, {
    path: 'php.svg',
    tooltip: 'PHP',
  }, {
    path: 'nodejs-1.svg',
    tooltip: 'NodeJS',
  }, {
    path: 'react-2.svg',
    tooltip: 'React',
  }, {
    path: 'typescript.svg',
    tooltip: 'TypeScript',
  }, {
    path: 'javascript.svg',
    tooltip: 'JavaScript',
  }, {
    path: 'jquery.svg',
    tooltip: 'JQuery',
  }, {
    path: 'python.svg',
    tooltip: 'Python',
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
