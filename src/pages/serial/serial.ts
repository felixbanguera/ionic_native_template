import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Serial } from '@ionic-native/serial';

/**
 * Generated class for the SerialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-serial',
  templateUrl: 'serial.html',
})
export class SerialPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private serial: Serial
    ) {
    this.serial.requestPermission().then(() => {
      this.serial.open({
        baudRate: 115200,
        dataBits: 8,
        stopBits: 1,
        parity: 0,
        dtr: true,
        rts: true,
        sleepOnPause: false
      }).then(() => {
        console.log('Serial connection opened');
      });
    }).catch((error: any) => console.log(error));
  }

  send(){
    alert("Pressed SEND")
    this.serial.write('Test\n').then((smthg) => {
      alert("sent, returned");
      alert(smthg);
    }).catch((error: any) => alert(error));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SerialPage');
  }

  ionViewDidLeave(){
    alert('leaving page Serial');
    this.serial.close()
    .then(() => {
      console.log('Serial connection opened');
    }).catch((error: any) => console.log(error));
  }

}
