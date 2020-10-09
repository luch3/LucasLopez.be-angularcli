import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Auth} from '../auth';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  auth: Auth;
  authServiceSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getAuthLog();
  }

  ngOnDestroy(): void {
    this.authServiceSubscription.unsubscribe();
  }

  getAuthLog(): void {
     this.authServiceSubscription = this.authService.getAuth().subscribe((auth) => this.auth = auth);
  }

}
