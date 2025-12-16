import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonLabel } from '@ionic/angular/standalone';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHouse, faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { faHouseCircleCheck } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonLabel, FontAwesomeModule],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  faHouse = faHouse;
  faHouseCircleCheck = faHouseCircleCheck;
  faSquarePlus = faSquarePlus;

  constructor() {
  }
}
