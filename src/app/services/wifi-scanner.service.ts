import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

declare var WifiWizard2: any;
@Injectable({
  providedIn: 'root'
})
export class WifiScannerService {
  public msgs: any;
  constructor(
    public plt: Platform,
    private androidPermissions: AndroidPermissions
  ) {
    const platforms = this.plt.platforms();
    this.msgs = ['PLATFORMS = ' + platforms.join(', ')];
    if (this.plt.is('ios') && !this.plt.is('mobileweb')) {
      console.log('I am an iOS device!');
      this.msgs.push('iOS detected');
    }
    if (this.plt.is('android') && !this.plt.is('mobileweb')) {
      console.log('I am an Android device!');
      this.msgs.push('Android detected');
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION).then(
        result => this.msgs.push('Has AFL permission?' + result.hasPermissionto.String()),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION)
      );
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_WIFI_STATE).then(
        result => this.msgs.push('Has permission?' + result.hasPermissionto.String()),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_WIFI_STATE)
      );
      this.androidPermissions.requestPermissions(
        [this.androidPermissions.PERMISSION.ACCESS_WIFI_STATE, this.androidPermissions.PERMISSION.GET_ACCOUNTS]
      );

    }
    if (typeof WifiWizard2 !== 'undefined') {
      console.log('WifiWizard2 loaded');
      console.log(WifiWizard2);
      this.msgs.push('WifiWizard2 loaded');
      this.msgs.push('wifi detected');
      WifiWizard2.requestPermission();
    } else {
      console.warn('WifiWizard2 not loaded');
      this.msgs.push('Err - WifiWizard2 not loaded');
    }

    // alert(this.msgs);

  }

  getConnectedSSID(){
     return WifiWizard2.getConnectedSSID();
  }

  scan(options= null){
    return WifiWizard2.scan(options);
  }

  calculateDistance(levelInDb: any, freqInMHz: any) {
    var exp = (27.55 - (20 * Math.log10(freqInMHz)) + Math.abs(levelInDb)) / 20.0;
    return Math.pow(10.0, exp);
  }
  scanAndGetDistance(bssid:string,callback){
    var distance = null;
    var wifi = [];
    this.scan().then((wifis)=>{
      wifi = wifis.filter(wifi => wifi.BSSID == bssid);
      if(wifi.length>0){
        distance = this.calculateDistance(wifi[0].level, wifi[0].frequency).toFixed(2);
        callback(null,distance);
      }else{
        callback("not found",null);
      }
      
    }).catch((e)=> {
      callback('failed',null);
    });

  }


}
