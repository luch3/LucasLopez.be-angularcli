import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-presentation',
  templateUrl: './cv-presentation.component.html',
  styleUrls: ['./cv-presentation.component.css']
})
export class CvPresentationComponent implements OnInit {

  listeStr: string[] = ['Travail d\'équipe', 'Flexible', 'Positif', 'Fiable', 'Passionné', 'Motivé', 'Autodidacte', 'Curieux'];
  constructor() { }

  ngOnInit(): void {
  }

  goToLink(url: string): void {
    window.open(url, '_blank');
  }

}
