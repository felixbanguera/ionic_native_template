import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SerialProvider } from '../../providers/serial/serial'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private serial: SerialProvider) {

  }

  send(msg=''){
    alert("Pressed SEND from HOme")
    this.serial.sendData(msg || 'Test\n').subscribe(
      (dataReturned)=>{
        alert("sent, returned");
        alert(dataReturned);
      },
      (error)=>{alert(error);}
    );
  }

  ionViewDidLeave(){
    // alert('leaving page Home');
    // this.serial.closeConnection().subscribe(()=>{
    //   alert('Serial connection closed!');
    // });
  }

}
