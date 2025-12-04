import { Component, OnInit } from '@angular/core'; //imported OnInit
import { IonContent } from '@ionic/angular/standalone';
import { HouseComponent } from '../components/house/house.component';
import { CommonModule } from '@angular/common';
import { House } from '../service/house/house';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [ IonContent, HouseComponent, CommonModule, RouterModule],
})
export class Tab1Page implements OnInit{
  houses: any[] = [];  //array of objects from house service

  constructor(private houseService: House) {}

  ngOnInit() {
    this.houses = this.houseService.getHouses();
  }
}
  