import { Injectable } from '@angular/core';
import { Hotspot } from '@ionic-native/hotspot/ngx';
import { OpenNativeSettings } from '@ionic-native/open-native-settings/ngx';
@Injectable({
  providedIn: 'root'
})
export class HotspotService {
  constructor(
    private hotspot: Hotspot,
    private openNativeSettings: OpenNativeSettings
    ) { 
  }

  openWireless(){
    return this.openNativeSettings.open("wireless");
  }
  createHotspot(ssid,mode,password){
    // return this.hotspot.startHotspot();
    return this.hotspot.createHotspot(ssid, mode,password);
    
  }

  stopHotspot(){
   return this.hotspot.stopHotspot();
  }


}
