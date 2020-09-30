import {Component, OnInit} from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Lucas Lopez - Etudiant en informatique';
  ngOnInit(): void {
    AOS.init();
  }
}
