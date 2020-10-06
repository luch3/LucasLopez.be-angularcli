import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  /*formNewPerson: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    pseudo: new FormControl('', [Validators.required, Validators.minLength(4)]),
    address: new FormGroup({
      street: new FormControl('', Validators.required),
      num: new FormControl('', Validators.required)
    })
  });*/
  formNewPerson: FormGroup = this.fb.group({
    name: ['', Validators.required],
    pseudo: ['', [Validators.required, Validators.minLength(4)]],
    address: this.fb.group({
      street: ['', Validators.required],
      num: ['', Validators.required]
    })
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  checkNameInvalid(): boolean {
    const nameControl: AbstractControl = this.formNewPerson.controls.name;
    return nameControl.touched && nameControl.invalid;
  }

  checkPseudoInvalid(): boolean {
    return true;
  }

  logForm(): void {
    console.log(this.formNewPerson.value);
  }

  checkAdressValid(): boolean {
    return this.formNewPerson.controls.address.invalid;
  }
}
