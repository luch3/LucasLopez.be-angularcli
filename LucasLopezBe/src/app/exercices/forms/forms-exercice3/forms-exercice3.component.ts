import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forms-exercice3',
  templateUrl: './forms-exercice3.component.html',
  styleUrls: ['./forms-exercice3.component.css']
})
export class FormsExercice3Component implements OnInit {

  formNewPerson: FormGroup = new FormGroup({
    pseudo: new FormControl('', Validators.required),
    mdp: new FormControl('', [Validators.required, Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$')]),
    mail: new FormControl('', [Validators.required,
      //Validators.pattern('(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])'),
      Validators.email]),
    date: new FormControl('', Validators.required),
    autre: new FormGroup( {
      poursuivre: new FormControl('', Validators.required),
      connaissance: new FormControl('', Validators.required),
      note: new FormControl('', Validators.required)
    })
  });

  constructor() { }

  ngOnInit(): void {
  }

  isPasswordInvalid(): boolean {
    return this.formNewPerson.controls.mdp.invalid && this.formNewPerson.controls.mdp.touched && this.formNewPerson.controls.mdp.dirty;
  }
}
