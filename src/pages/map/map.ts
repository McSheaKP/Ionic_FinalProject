import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  //Api Key// AIzaSyDKSBudEjizMvZ46ixNC-WhXNL385cHKpk 

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

}
