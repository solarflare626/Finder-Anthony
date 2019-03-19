import { Injectable } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor(private audio: NativeAudio) { 
    this.audio.preloadSimple('beep', 'assets/sounds/beep.mp3');
  }

  play(name){
    this.audio.play(name);

  }
}
