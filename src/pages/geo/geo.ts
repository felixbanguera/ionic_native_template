import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the GeoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-geo',
  templateUrl: 'geo.html',
})
export class GeoPage {
  currentPos: any = {latitude: 0, longitude: 0};

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
    this.geolocation.getCurrentPosition().then((resp) => {
     this.currentPos.latitude = resp.coords.latitude
     this.currentPos.longitude = resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeoPage');
  }

}
