import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) {

   }

   async presentToast(options) {
    const toast = await this.toastController.create(options);
    toast.present();
  }
}
