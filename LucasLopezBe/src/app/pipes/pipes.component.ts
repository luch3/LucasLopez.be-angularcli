import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  welcomeMessage = 'Salut le monde';
  person = {
    firstName: 'Lucas',
    surName: 'Lopez'
  };



  constructor() { }

  ngOnInit(): void {
  }

}
