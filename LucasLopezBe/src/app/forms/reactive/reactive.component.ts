import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  formNewPerson: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  checkNameInvalid(): boolean {
    const nameControl: AbstractControl = this.formNewPerson.controls.name;
    return nameControl.touched && nameControl.invalid;
  }
}
