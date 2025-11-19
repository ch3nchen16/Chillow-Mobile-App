import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonContent, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonGrid, IonCol, IonRow } from '@ionic/angular/standalone';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [ RouterModule, IonContent, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonGrid, IonCol, IonRow],
})
export class Tab1Page {
  constructor() {}
}
