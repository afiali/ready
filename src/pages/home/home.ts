import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login-page/login-page';
import { SignupPage } from '../signup-page/signup-page';

import { Auth } from '../../providers/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public authService: Auth) {

  }

  loginPage(){
  	this.navCtrl.push(LoginPage);
  }

  signupPage(){
  	this.navCtrl.push(SignupPage);
  }

  logout(){
 
    this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
 
  }

}
