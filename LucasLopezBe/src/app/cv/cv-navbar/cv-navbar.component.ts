import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-navbar',
  templateUrl: './cv-navbar.component.html',
  styleUrls: ['./cv-navbar.component.css']
})
export class CvNavbarComponent implements OnInit {
  activeId: any;

  constructor() { }

  ngOnInit(): void {
  }

}
