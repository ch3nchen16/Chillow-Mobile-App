import { Component, OnInit, Input } from '@angular/core';
import { IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone'; //for the ion card
import { DecimalPipe } from '@angular/common'; //to format prices

@Component({
  selector: 'app-house-description',
  templateUrl: './house-description.component.html',
  standalone: true,
  imports: [IonCardTitle, IonCardSubtitle, DecimalPipe],
  styleUrls: ['./house-description.component.scss'],
})
export class HouseDescriptionComponent  implements OnInit {

  @Input('desc') //desc property
  house: any;

  constructor() { }

  ngOnInit() {}

}
