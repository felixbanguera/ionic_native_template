import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SerialProvider } from '../../providers/serial/serial';

@Component({
  selector: 'page-serial',
  templateUrl: 'serial.html',
})
export class SerialPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private serial: SerialProvider
    ) {
  }

  send(){
    alert("Pressed SEND from Serial")
    this.serial.sendData('Test\n').subscribe(
      (dataReturned)=>{
        alert("sent, returned");
        alert(dataReturned);
      },
      (error)=>{alert(error);}
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SerialPage');
  }

  ionViewDidLeave(){
    // alert('leaving page Serial');
    // this.serial.closeConnection().subscribe(()=>{
    //   alert('Serial connection closed!');
    // });
  }

}
