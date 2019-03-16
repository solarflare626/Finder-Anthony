import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'finder/scanner', loadChildren: './pages/finder/scanner/scanner.module#ScannerPageModule' },
  { path: 'finder/wifilist', loadChildren: './pages/finder/wifilist/wifilist.module#WifilistPageModule' },
  { path: 'hotspot', loadChildren: './pages/hotspot/hotspot.module#HotspotPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
