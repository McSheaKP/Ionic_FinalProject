import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

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
 
  constructor(public navCtrl: NavController, public geolocation: Geolocation) {}
 
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
        radius: '500',
        type: ['restaurant']
        //query: 'Museum of Contemporary Art Australia',
        //fields: ['photos', 'formatted_address', 'name', 'rating', 'opening_hours', 'geometry'],
      }  
        this.service = new google.maps.places.PlacesService(this.map);
        this.service.nearbySearch(request, callback);
      
    
    function callback(results, status) {
      console.log(results, "receiving results in callback")
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          var place = results[i];
        }
      }
    }  
    }, (err) => {
      console.log(err);
    });
 
  }
 
}