import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-hotspot-tutorial',
  templateUrl: './hotspot-tutorial.component.html',
  styleUrls: ['./hotspot-tutorial.component.scss'],
})
export class HotspotTutorialComponent implements OnInit {
  public ssid: string = "Find Me Anthony";
  public mode: string = 'WPA_PSK';
  public password: string = "12345678"

  public disable:boolean = false;
  public started: boolean= false;
  constructor(private modalController: ModalController,private storageService: StorageService) { }

  ngOnInit() {}

  back(){
    this.storageService.set('tut_hotspot',true).then(()=>{
      this.storageService.tut_hotspot = true;
      this.modalController.dismiss();
    })
  }

}
