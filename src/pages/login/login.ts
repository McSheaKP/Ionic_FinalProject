import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public _aup: UserProvider) {
  }

  user: any = {
    email: "",
    password: ""
  }
  
  doLogin(){
    this._aup.login(this.user)  
       .subscribe( (res: any) => {
             console.log(res)
             sessionStorage.setItem('token', res.token);
             sessionStorage.setItem('userId', res.userId);
             let token = sessionStorage.getItem('token');
             let userId = sessionStorage.getItem('userId');
             console.log("user token", token);
             console.log("user id", userId);
             this._aus.loginToggle;
             this.gotoLoggedIn();
             this._aus.loggedIn = true;
             
    })
  }
  
  gotoLoggedIn() {
    //this.router.navigate(['logged']);
  }
  
  deleteLogin(){
    this.user.email = "";
    this.user.password = "";
  }

  ngOnInit() {
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
