import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-navbar',
  templateUrl: './cv-navbar.component.html',
  styleUrls: ['./cv-navbar.component.css']
})
export class CvNavbarComponent implements OnInit {
  activeId: any;
  showNavbar = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar(): void{
    this.showNavbar = !this.showNavbar;
  }
}
