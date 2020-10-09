import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forms-exercice3',
  templateUrl: './forms-exercice3.component.html',
  styleUrls: ['./forms-exercice3.component.css']
})
export class FormsExercice3Component implements OnInit {

  constructor() {
  }

  formNewPerson: FormGroup = new FormGroup({
    pseudo: new FormControl('', [Validators.required, Validators.minLength(5)]),
    mdp: new FormControl('', [Validators.required, Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,26}$')]),
    mail: new FormControl('', [Validators.required,
      Validators.pattern('(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])'),
      Validators.email]),
    date: new FormControl('', [Validators.required]),
    autre: new FormGroup({
      poursuivre: new FormControl(''),
      connaissance: new FormControl('', Validators.required),
      note: new FormControl('', Validators.required)
    })
  });
  date = new Date();
  notes: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  logPersonne(): any {
    const pfg: FormGroup = this.formNewPerson;
    const personne = {
      pseudo : pfg.get('pseudo').value,
      mdp: pfg.get('mdp').value,
      mail : pfg.get('mail').value,
      date : pfg.get('date').value,
      poursuivre : (pfg.get('autre').get('poursuivre').value === true ? true : false),
      connaissance : pfg.get('autre').get('connaissance').value,
      note : pfg.get('autre').get('note').value
    };
    console.log(personne);
    return personne;
  }
  reset(): void {
    this.formNewPerson.reset();
  }

  ngOnInit(): void {
  }
  isValid(c: AbstractControl): boolean {
    return c.invalid && c.touched && c.dirty;
  }

  isPasswordInvalid(): boolean {
    return this.isValid(this.formNewPerson.controls.mdp);
  }

  isMailInvalid(): boolean {
    return this.isValid(this.formNewPerson.controls.mail);
  }

  isDateInvalid(): boolean {
    return this.isValid(this.formNewPerson.controls.date);
  }

  isPseudoInvalid(): boolean {
    // tslint:disable-next-line:max-line-length
    return this.isValid(this.formNewPerson.controls.pseudo);
  }

  isConnaissanceInvalid(): boolean {
    return this.formNewPerson.get('autre').get('connaissance').invalid;
  }
  isNoteInvalid(): boolean {
    return this.formNewPerson.get('autre').get('note').invalid && this.formNewPerson.get('autre').get('note').touched;
  }


  defaultFill(): void {
    const pfg: FormGroup = this.formNewPerson;
    /*pfg.get('pseudo').setValue('Pseudo');
    pfg.get('mdp').setValue('Motd3passe');
    pfg.get('mail').setValue('mail@student.helha.be');
    pfg.get('date').setValue('1970-01-01');
    pfg.get('autre').get('poursuivre').setValue('true');
    pfg.get('autre').get('connaissance').setValue('lesDeux');
    pfg.get('autre').get('note').setValue(10);*/
    pfg.setValue({
      pseudo: 'Testdd',
      mdp : 'Test3fjsdkjdfsdf',
      mail : 'test@test.test',
      date : '1970-01-01',
      autre : {
        poursuivre : false,
        connaissance : 'lesDeux',
        note : 9
      }
    });
  }
}
