import { Component, OnInit } from '@angular/core';

interface Computer {
  nameComputer: string;
  price: number;
  isPowerful: boolean;
}

@Component({
  selector: 'app-cdb-exercice5',
  templateUrl: './cdb-exercice5.component.html',
  styleUrls: ['./cdb-exercice5.component.css']
})
export class CdbExercice5Component implements OnInit {
  computers: Computer[] = [
    {nameComputer: 'MS0', price: 599.99, isPowerful: true},
    {nameComputer: 'MS1', price: 599.99, isPowerful: true},
    {nameComputer: 'MS2', price: 599.99, isPowerful: true},
    {nameComputer: 'MS3', price: 599.99, isPowerful: false},
    {nameComputer: 'MS4', price: 599.99, isPowerful: true},
    {nameComputer: 'MS5', price: 599.99, isPowerful: true},
    {nameComputer: 'GT1', price: 599.99, isPowerful: false},
    {nameComputer: 'GT2', price: 599.99, isPowerful: true},
    {nameComputer: 'GT3', price: 599.99, isPowerful: false},
    {nameComputer: 'GT458', price: 599.99, isPowerful: false}];
  constructor() { }

  ngOnInit(): void {
  }

}
