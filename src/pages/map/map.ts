import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

declare var google;
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

  @ViewChild('map') mapElement: ElementRef;
  map: any;
 
  ionViewDidLoad(){
    this.loadMap();
    console.log(this.map, "google map object")
    console.log(this.mapElement, "Map Element")
  }
 
  loadMap(){
 
    let latLng = new google.maps.LatLng(-34.9290, 138.6010);
 
    let mapOptions = {
      center: latLng,
      zoom: 15
      //mapTypeId: google.maps//.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

}
