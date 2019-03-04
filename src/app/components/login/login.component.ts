import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  loaded;

  constructor(public authService: AuthService) { }

  logoLoaded() {
    this.loaded = true;
  }
}
