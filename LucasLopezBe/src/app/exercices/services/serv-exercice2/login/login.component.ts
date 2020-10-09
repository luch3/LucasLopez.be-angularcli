import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {


  constructor(private authService: AuthService) { }

  formLogin: FormGroup = new FormGroup({
    mail: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  ngOnInit(): void {
  }
  ngOnDestroy(): void {

  }

  submitForm(): void {
    this.authService.store(this.formLogin.get('mail').value, this.formLogin.get('password').value);
  }
}
