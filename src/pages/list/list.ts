import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { MapProvider } from '../../providers/map/map';
/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public _mps: MapProvider) {}

  listData: any;


  ionViewDidLoad() {
    this.listData = this._mps.mapData;
    console.log('ionViewDidLoad ListPage');
  }

}
