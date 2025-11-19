import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonContent, IonImg, IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonImg, IonFab, IonFabButton, IonIcon, RouterModule]
})
export class LandingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
