import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-wifi-list-tutorial',
  templateUrl: './wifi-list-tutorial.component.html',
  styleUrls: ['./wifi-list-tutorial.component.scss'],
})
export class WifiListTutorialComponent implements OnInit {
  public wifis: Array<any> = [{
    SSID: "Sample Wifi",
    BSSID: "12:34:56:78:90",
    frequency: '700',
    level: -80,
    distance: '10'
  }];
  constructor(private modalController: ModalController,private storageService: StorageService) { }

  ngOnInit() {}

  back(){
    this.storageService.set('tut_wifilist',true).then(()=>{
      this.storageService.tut_wifilist = true;
      this.modalController.dismiss();
    })
  }

}
