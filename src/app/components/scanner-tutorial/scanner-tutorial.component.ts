import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';
import { ModalController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-scanner-tutorial',
  templateUrl: './scanner-tutorial.component.html',
  styleUrls: ['./scanner-tutorial.component.scss'],
})
export class ScannerTutorialComponent implements OnInit {
  public wifi: any;
  public style = 'pulsating-circle';
  public distance:any = 10;
  public speed: any = 11;
  public interval: any;
  public scan_interval: any;
  public scanning: boolean = false;
  private leaving: boolean = false;
  private nOutOfRange: number = 0;
  constructor(
    private audio: AudioService,
    private modalController: ModalController,private storageService: StorageService
  ) { }

  ngOnInit() {
    // this.interval = setInterval(() => {
    //   this.audio.play('beep');
    //   if(this.leaving){
    //     clearTimeout(this.interval);
    //   }
    // }, ((this.speed * 0.1) + 0.1) * 1000);
  }

  ionViewWillLeave(){
    this.leaving= true;
    clearTimeout(this.interval);

  }

  back(){
    this.storageService.set('tut_scanner',true).then(()=>{
      this.storageService.tut_scanner = true;
      this.modalController.dismiss();
    })
  }

}
