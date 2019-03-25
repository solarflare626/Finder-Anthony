import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public modalController: ModalController) { }

  async presentModal(options) {
    return await this.modalController.create(options);
    
  }
}
