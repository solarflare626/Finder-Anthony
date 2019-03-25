import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
 
@Component({
  selector: 'app-home-tutorial',
  templateUrl: './home-tutorial.component.html',
  styleUrls: ['./home-tutorial.component.scss'],
})
export class HomeTutorialComponent implements OnInit {

  constructor(private modalController: ModalController,private storageService: StorageService) { }

  ngOnInit() {}

  back(){
    this.storageService.set('tut_home',true).then(()=>{
      this.storageService.tut_home = true;
      this.modalController.dismiss();
    })
  }

}
