import { Injectable } from '@angular/core';
import { Serial } from '@ionic-native/serial';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { mergeMap } from 'rxjs/operators';

/*
  Generated class for the SerialProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SerialProvider {

  constructor(private serial: Serial) {
    alert('Hello SerialProvider Provider');
    // this.requestPermission().subscribe(()=>{
    //   this.openConnection().subscribe(()=>{},
    //     (error)=>{  alert(error); });
    //   },
    //   (error)=>{alert(error);});

    this.requestPermission().pipe(mergeMap(() =>  this.openConnection()))
    .subscribe(()=>{},
      (error)=>{ alert(error); }
    );
  }

  private requestPermission(serialObj=this.serial){
    return fromPromise(serialObj.requestPermission());
  }

  private openConnection(config={}, serialObj=this.serial){
    return fromPromise(
      serialObj.open({
        baudRate: config['baudRate'] || 9600,
        dataBits: config['dataBits'] || 8,
        stopBits: config['stopBits'] || 1,
        parity: config['parity'] || 0,
        dtr: config['dtr'] || true,
        rts: config['rts'] || true,
        sleepOnPause: config['sleepOnPause'] || false
      }));
  }

  sendData(msg, serialObj=this.serial){
    return fromPromise(serialObj.write(msg));
  }

  closeConnection(serialObj=this.serial){
    return fromPromise(serialObj.close());
  }

}
