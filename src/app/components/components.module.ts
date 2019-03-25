import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScannerComponent } from './scanner/scanner.component';
import { HomeTutorialComponent } from './home-tutorial/home-tutorial.component';
import { HotspotTutorialComponent } from './hotspot-tutorial/hotspot-tutorial.component';
import { ScannerTutorialComponent } from './scanner-tutorial/scanner-tutorial.component';
import { WifiListTutorialComponent } from './wifi-list-tutorial/wifi-list-tutorial.component';
@NgModule({
  declarations: [ScannerComponent,HomeTutorialComponent,HotspotTutorialComponent,ScannerTutorialComponent,WifiListTutorialComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  exports: [ScannerComponent,HomeTutorialComponent,HotspotTutorialComponent,ScannerTutorialComponent,WifiListTutorialComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [ScannerComponent,HomeTutorialComponent,HotspotTutorialComponent,ScannerTutorialComponent,WifiListTutorialComponent]
})
export class ComponentsModule { }
