import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forms-exercice2',
  templateUrl: './forms-exercice2.component.html',
  styleUrls: ['./forms-exercice2.component.css']
})
export class FormsExercice2Component implements OnInit {

  formNewPerson: FormGroup = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
  });
  constructor() { }

  ngOnInit(): void {
  }

  nomIsInvalid(): boolean {
    return this.formNewPerson.controls.nom.invalid && this.formNewPerson.controls.nom.dirty && this.formNewPerson.controls.nom.touched;
  }

  prenomIsInvalid(): boolean {
    return this.formNewPerson.controls.prenom.invalid &&
      this.formNewPerson.controls.prenom.dirty && this.formNewPerson.controls.prenom.touched;
  }
}
