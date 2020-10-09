import { Component, OnInit } from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-serv-exercice2',
  templateUrl: './serv-exercice2.component.html',
  styleUrls: ['./serv-exercice2.component.css']
})
export class ServExercice2Component implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
