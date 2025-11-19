import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
//import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InformationPage implements OnInit {
//   propertyId: string;
//  property: any;

   constructor(/*private route: ActivatedRoute, private propertyService: PropertyService*/) {}

  ngOnInit() {
    // this.propertyId = this.route.snapshot.paramMap.get('id');
    // this.property = this.propertyService.getPropertyById(this.propertyId);
  }
}