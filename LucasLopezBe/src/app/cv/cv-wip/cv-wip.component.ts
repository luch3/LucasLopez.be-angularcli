import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-wip',
  templateUrl: './cv-wip.component.html',
  styleUrls: ['./cv-wip.component.css']
})
export class CvWipComponent implements OnInit {

  wip = true;
  constructor() { }

  ngOnInit(): void {
  }

}
