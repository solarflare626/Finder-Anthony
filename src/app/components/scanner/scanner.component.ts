import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { WifiScannerService } from 'src/app/services/wifi-scanner.service';
import { ToastService } from 'src/app/services/toast-service';
import { AudioService } from 'src/app/services/audio.service';
var num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
var tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

function number2words(n) {
  if (n < 20) return num[n];
  var digit = n % 10;
  if (n < 100) return tens[~~(n / 10) - 2] + (digit ? "-" + num[digit] : "");
  if (n < 1000) return num[~~(n / 100)] + " hundred" + (n % 100 == 0 ? "" : " " + number2words(n % 100));
  return number2words(~~(n / 1000)) + " thousand" + (n % 1000 != 0 ? " " + number2words(n % 1000) : "");
}

declare var WifiWizard2: any;
@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss'],
})
export class ScannerComponent implements OnInit {
  public wifi: any;
  public style = 'pulsating-circle';
  public distance: any;
  public speed: any = 11;
  public interval: any;
  public scan_interval: any;
  public scanning: boolean = false;
  private leaving: boolean = false;
  private nOutOfRange: number = 0;
  constructor(
    private navParams: NavParams,
    private modal: ModalController,
    private audio: AudioService,
    private toastCtrl: ToastService,
    private wifiScanner: WifiScannerService) { }
  
  ngOnInit() {
    this.wifi = this.navParams.get("wifi");
    // alert(this.wifi);

      this.interval = setInterval(() => {
        this.audio.play('beep');
        if(this.leaving){
          clearTimeout(this.interval);
          clearTimeout(this.scan_interval);
        }
      }, ((this.speed * 0.1) + 0.1) * 1000);


    
    this.scan_interval = setInterval(()=>{
      if(!this.scanning && !this.leaving){
        this.scanning = true;
        this.wifiScanner.scanAndGetDistance(this.wifi.BSSID,(err,data)=>{
          if(!err && data){
            this.nOutOfRange = 0;
            this.distance = data;
            this.calculateSpeed();
          }else if(err == "not found"){
            this.nOutOfRange++;
            if(this.nOutOfRange > 1){
              this.distance= null;
              alert("Wifi is now out of range");
            }
          }else if(err == "failed"){
            WifiWizard2.disableWifi().then(() => {
              WifiWizard2.enableWifi().then(() => {
                
              });
            });
          }
          this.scanning = false;
    
        });
      }
      

    },5000);

    



  }
  ionViewWillLeave(){
    this.leaving= true;
    clearTimeout(this.interval);
    clearTimeout(this.scan_interval);

  }
  calculateSpeed() {
    clearTimeout(this.interval);
    var speed = 0;
    var speed = Math.round(this.distance);
    if (speed > 10)
      this.speed = 10;
    else if (speed < 0) {
      this.speed = 0;
    }else{
      this.speed = speed;
    }

    this.style = number2words(this.speed);
    console.log("this.speed:", this.speed);
    this.interval = setInterval(() => {
      
      this.audio.play('beep');
      if(this.leaving){
        clearTimeout(this.interval);
        clearTimeout(this.scan_interval);
      }
    }, ((this.speed * 0.1) + 0.1) * 1000);
  }

  
  back() {
    this.modal.dismiss();
  }

}
