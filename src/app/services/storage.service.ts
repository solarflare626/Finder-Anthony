import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public tut_home: boolean = false;
  public tut_hotspot: boolean = false;
  public tut_scanner: boolean = false;
  public tut_wifilist: boolean = false;
  constructor(private storage: Storage) { 
    this.init();
  }

  init(){
    this.get('tut_home').then(data=>{
      if(data){
        this.tut_home = data;
      }
    });
    this.get('tut_hotspot').then(data=>{
      if(data){
        this.tut_hotspot = data;
      }
    });this.get('tut_scanner').then(data=>{
      if(data){
        this.tut_scanner = data;
      }
    });
    this.get('tut_wifilist').then(data=>{
      if(data){
        this.tut_wifilist = data;
      }
    });
  }

  get(key){
    return this.storage.get(key);
  }
  set(key,value){
    return this.storage.set(key,value);
  }
}
