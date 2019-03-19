import { Component, OnInit } from '@angular/core';
import { HotspotService } from '../../services/hotspot.service';
// import { ToastController } from '@ionic/angular';
import { ToastService } from '../../services/toast-service';
@Component({
  selector: 'app-hotspot',
  templateUrl: './hotspot.page.html',
  styleUrls: ['./hotspot.page.scss'],
})
export class HotspotPage implements OnInit {

  public ssid: string = "Find Me Anthony";
  public mode: string = 'WPA_PSK';
  public password: string = "12345678"

  public disable:boolean = false;
  public started: boolean= false;
  constructor(public hotspot: HotspotService,public toastController: ToastService) { }

  ngOnInit() {
  }

  
  start(){
    this.disable = true;
    this.hotspot.createHotspot(this.ssid, this.mode,this.password).then((r)=>{
      this.started = true;
    }).catch((e)=>{
      this.toastController.presentToast({
        message: e,
        duration: 3000
      });
      this.disable = false;
    });
  }

  settings(){
    this.hotspot.openWireless();
  }

  stop(){
    this.disable = false;
    this.hotspot.stopHotspot().then(()=>{

      this.started = false;
    });
  }

}
