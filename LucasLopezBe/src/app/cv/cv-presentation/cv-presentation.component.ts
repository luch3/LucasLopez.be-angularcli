import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-presentation',
  templateUrl: './cv-presentation.component.html',
  styleUrls: ['./cv-presentation.component.css']
})
export class CvPresentationComponent implements OnInit {

  listeStr: string[] = ['Atout 1', 'Atout 2', 'Atout 3', 'Atout 4', 'Atout 5'];
  constructor() { }

  ngOnInit(): void {
  }

  goToLink(url: string): void {
    window.open(url, '_blank');
  }

}
