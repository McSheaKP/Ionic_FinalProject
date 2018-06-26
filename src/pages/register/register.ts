import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { MapPage } from '../map/map';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public _aup: UserProvider) {}

   
  user: any = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }
  
  userData: any;
  
  doRegister(){
    console.log(this.user, "user data");
    this._aup.register(this.user)  
       .subscribe( (res: any) => {
             console.log(res, "returned value from .subcribe");
             sessionStorage.setItem('token', res.token);
             sessionStorage.setItem('userId', res.userId);
             let token = sessionStorage.getItem('token');
             let userId = sessionStorage.getItem('userId');
             this.mapRoute();        
    })            
  }
  mapRoute() {
    this.navCtrl.setRoot(MapPage);
  }
  deleteRegister(){
    this.user.firstName = "";
    this.user.lastName = "";
    this.user.email = "";
    this.user.password = "";
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
