import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { MapProvider } from '../../providers/map/map';

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
 
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  service: any;
  infowindow: any;
  mapsData: any;
 
  constructor(public navCtrl: NavController, public geolocation: Geolocation, public _mps: MapProvider) {}
 
  ionViewDidLoad(){
    this.loadMap();
  }
  
  addInfoWindow(marker, content){
 
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
   
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
   
  }
  
  //this takes in the place parameter and passes 
  createMarker(place) {
    console.log(place, " place inside createmarker");
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: this.map,
      position: place.geometry.location
    });
  }  

  //connected to the location marker button to add marker in the center of the screen
  addMarker(){

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
   
    let content = "<h4>Information!</h4>";         
   
    this.addInfoWindow(marker, content);
   
  }

  loadMap(){
    let that = this;
    this.geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);


      var request = {
        location: latLng,
        radius: '1000',
        type: ['coffee']
        //query: 'Museum of Contemporary Art Australia',
        //fields: ['photos', 'formatted_address', 'name', 'rating', 'opening_hours', 'geometry'],
      }  
        this.service = new google.maps.places.PlacesService(this.map);
        this.service.nearbySearch(request, callback);
      
    //try to migrate some of this to the provider
    //we really want the results to be captured in the provider so that we can display it in the list page
    function callback(results, status) {
      console.log(results, "receiving results in callback")
      console.log(results[0].geometry.location, "geometry location")
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          var place = [i];
          that.createMarker(results[i]);
          console.log(that, "logging the this")
          
        }
      that._mps.mapData = results;
      }

    }  
    }, (err) => {
      console.log(err);
    });
 
  }
 
}