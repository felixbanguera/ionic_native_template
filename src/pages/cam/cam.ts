import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the CamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cam',
  templateUrl: 'cam.html',
})
export class CamPage {
  options: CameraOptions;
  selfieImage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
    this.options = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
  }

  ionViewDidLoad() {
    this.camera.getPicture(this.options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
       // If it's base64 (DATA_URL):
       let base64Image = 'data:image/jpeg;base64,' + imageData;
       this.selfieImage = base64Image;
    }, (err) => {
      alert(err);
    });
    console.log('ionViewDidLoad CamPage');
  }

}
