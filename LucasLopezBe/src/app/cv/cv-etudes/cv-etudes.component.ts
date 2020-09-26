import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-etudes',
  templateUrl: './cv-etudes.component.html',
  styleUrls: ['./cv-etudes.component.css']
})
export class CvEtudesComponent implements OnInit {
  etudes = [{
    periode : '',
    lieu : '',
    diplome: '',
    themes : ['', '']
  },
    {
    periode : '',
    lieu : '',
    diplome: '',
    themes : ['', '']
    }];
  constructor() { }

  ngOnInit(): void {
  }

}
