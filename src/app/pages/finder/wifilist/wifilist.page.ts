import { Component, OnInit } from '@angular/core';
import { WifiScannerService } from '../../../services/wifi-scanner.service';
import { ToastService } from '../../../services/toast-service';
import { ModalController } from '@ionic/angular';
import { ScannerComponent } from 'src/app/components/scanner/scanner.component';

declare var WifiWizard2: any;
@Component({
  selector: 'app-wifilist',
  templateUrl: './wifilist.page.html',
  styleUrls: ['./wifilist.page.scss'],
})
export class WifilistPage implements OnInit {

  public wifis: Array<any>;
  constructor(
    private wifiScanner: WifiScannerService,
    private toastCtrl: ToastService,
    public modalController: ModalController
  ) {}

  ngOnInit(){
    this.scan();
  }

  async presentModal(item) {
    const modal = await this.modalController.create({
      component: ScannerComponent,
      componentProps: { wifi: item }
    });
    return await modal.present();
  }
  select(item:any){
    let modal = this.presentModal(item);
  }

  scan() {
    this.wifiScanner.scan().then((results) => {
      var results = results;
      results.forEach(wifi => {
        wifi.distance = "" + this.calculateDistance(wifi.level, wifi.frequency).toFixed(2) + " m";
      });
      this.wifis = results;
    }).catch((e) => {
      WifiWizard2.disableWifi().then(() => {
        this.toastCtrl.presentToast({
          message: 'Disabling wifi.',
          duration: 2000
        });
        WifiWizard2.enableWifi().then(() => {
          this.toastCtrl.presentToast({
            message: 'Enabling wifi.',
            duration: 2000
          });
          this.scan()
        });
      });


    });

  }

  calculateDistance(levelInDb: any, freqInMHz: any) {
    var exp = (27.55 - (20 * Math.log10(freqInMHz)) + Math.abs(levelInDb)) / 20.0;
    return Math.pow(10.0, exp);
  }

}
