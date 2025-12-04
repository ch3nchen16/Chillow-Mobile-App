import { Component, OnInit, Input } from '@angular/core';
import { IonCard, IonCardHeader, IonCardContent } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { HouseImageComponent } from './house-image/house-image.component';
import { HouseDescriptionComponent } from './house-description/house-description.component';
import { HouseLocationComponent } from './house-location/house-location.component';


@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  standalone: true, 
  imports: [
    IonCard,
    IonCardHeader,
    IonCardContent,
    HouseImageComponent,
    HouseDescriptionComponent,
    HouseLocationComponent,
    RouterModule
  ],
  styleUrls: ['./house.component.scss'],
})
export class HouseComponent  implements OnInit {

  @Input('house') 
  house: any;

  constructor() { }

  ngOnInit() {}

}
