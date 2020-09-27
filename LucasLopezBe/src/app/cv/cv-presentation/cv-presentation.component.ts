import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-presentation',
  templateUrl: './cv-presentation.component.html',
  styleUrls: ['./cv-presentation.component.css']
})
export class CvPresentationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToLink(url: string): void {
    window.open(url, '_blank');
  }

}
