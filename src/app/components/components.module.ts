import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScannerComponent } from './scanner/scanner.component';
@NgModule({
  declarations: [ScannerComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  exports: [ScannerComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [ScannerComponent]
})
export class ComponentsModule { }
