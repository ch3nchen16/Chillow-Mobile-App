import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { IonContent, IonItem, IonIcon, IonDatetime } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
  standalone: true,
  imports: [IonContent, FormsModule, RouterModule, IonIcon, IonItem, IonDatetime]
})
export class BookingPage implements OnInit {

  fullname: string = '';
  email: string = '';
  phone: string = '';


  constructor() { }

  ngOnInit() {
  }

}
