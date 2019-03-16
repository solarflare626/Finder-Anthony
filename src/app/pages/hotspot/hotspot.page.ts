import { Component, OnInit } from '@angular/core';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot/ngx';
@Component({
  selector: 'app-hotspot',
  templateUrl: './hotspot.page.html',
  styleUrls: ['./hotspot.page.scss'],
})
export class HotspotPage implements OnInit {

  private ssid: string = "Find Me Anthony";
  private mode: string = 'WPA';
  private password: string = "12345678"

  private disable:boolean = false;
  private started: boolean= false;
  constructor(private hotspot: Hotspot) { }

  ngOnInit() {
  }

  start(){
    this.disable = true;
    this.hotspot.createHotspot(this.ssid, this.mode,this.password).then((r)=>{
      this.started = true;
    }).catch(e=>{
      this.disable = false;
    });
  }

  stop(){
    this.disable = false;
    this.hotspot.stopHotspot().then(()=>{

      this.started = false;
    });
  }

}
