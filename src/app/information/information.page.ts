import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonAccordionGroup, IonAccordion, IonItem, IonLabel} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { GoogleMapsModule } from '@angular/google-maps';
import { House } from '../service/house/house'; //imports house service
//fontawesome icons
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShower } from '@fortawesome/free-solid-svg-icons';
import { faRuler } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';


register();
@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonAccordionGroup, IonAccordion, IonItem, IonLabel, FontAwesomeModule, RouterModule, GoogleMapsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class InformationPage implements OnInit {
  faShower = faShower;
  faRuler = faRuler;
  house: any;

  constructor(
    private route: ActivatedRoute,
    private houseService: House
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.house = await this.houseService.getHouseById(id!);
  }

  getPosition(){
    return {lat: this.house.lat, lng: this.house.lng}
  }
}

