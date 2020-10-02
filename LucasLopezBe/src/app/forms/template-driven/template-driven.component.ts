import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  pseudo: string;
  website: any;

  constructor() { }

  ngOnInit(): void {
  }

  logForm(): void {
    console.log(this.pseudo);
  }
}
