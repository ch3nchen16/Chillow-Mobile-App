import { Component, NgModule } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
//import { AgmCoreModule } from 'ng-agm-core-lib';
//import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet]
})
export class AppComponent {
  constructor() {}
}

// @NgModule({
//   imports: [AgmCoreModule.forRoot({
//     apiKey: "Google_maps_api_key"
//   })],
//   exports: [AgmCoreModule]
// })
export class MapsModule {}