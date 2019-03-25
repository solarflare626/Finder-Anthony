import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { HomeTutorialComponent } from '../components/home-tutorial/home-tutorial.component';


declare var WifiWizard2: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private wifis: Array<any>;
  constructor(

    public modalController: ModalController,
    public storageService: StorageService
  ) {
    
  }

  ngOnInit() {
    setTimeout(()=>{
      if(!this.storageService.tut_home){
        this.presentModal();
       }
    },4000);
  
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: HomeTutorialComponent
    });
    return await modal.present();
  }
 
}